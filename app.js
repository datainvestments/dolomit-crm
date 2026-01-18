// app.js (GitHub Pages friendly)
const { SUPABASE_URL, SUPABASE_ANON_KEY } = window.DP_CONFIG || {};
if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  alert("Нет SUPABASE_URL или SUPABASE_ANON_KEY. Проверь config.js");
}

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ---------- helpers ----------
const $ = (sel) => document.querySelector(sel);

function show(viewId) {
  document.querySelectorAll("[data-view]").forEach((el) => (el.style.display = "none"));
  const v = document.querySelector(`[data-view="${viewId}"]`);
  if (v) v.style.display = "block";
}

async function ensureProfile(user, role, full_name, company) {
  // try load
  const { data: prof, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .maybeSingle();

  // if exists
  if (prof && !error) return prof;

  // create
  const payload = {
    id: user.id,
    role: role || "buyer",
    full_name: full_name || "",
    company: company || "",
  };

  const { data: created, error: e2 } = await supabase
    .from("profiles")
    .insert(payload)
    .select("*")
    .single();

  if (e2) throw e2;
  return created;
}

async function getMyProfile(userId) {
  const { data, error } = await supabase.from("profiles").select("*").eq("id", userId).single();
  if (error) throw error;
  return data;
}

// ---------- auth ----------
async function signUp(email, password) {
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) throw error;
  return data;
}

async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data;
}

async function signOut() {
  await supabase.auth.signOut();
}

// ---------- crm actions ----------
async function createLead(userId, title, note) {
  const { data, error } = await supabase
    .from("leads")
    .insert({ owner_id: userId, title, note })
    .select("*")
    .single();
  if (error) throw error;
  return data;
}

async function listLeads(userId) {
  const { data, error } = await supabase
    .from("leads")
    .select("*")
    .eq("owner_id", userId)
    .order("created_at", { ascending: false });
  if (error) throw error;
  return data || [];
}

// ---------- UI wiring ----------
async function refreshLeads(userId) {
  const list = $("#leadsList");
  list.innerHTML = "Загрузка...";
  try {
    const items = await listLeads(userId);
    if (!items.length) {
      list.innerHTML = "<div class='muted'>Пока нет лидов</div>";
      return;
    }
    list.innerHTML = items
      .map(
        (x) => `
        <div class="card">
          <div class="row">
            <div>
              <div class="h">${escapeHtml(x.title || "Без названия")}</div>
              <div class="muted">${escapeHtml(x.note || "")}</div>
            </div>
            <div class="muted small">${formatDate(x.created_at)}</div>
          </div>
        </div>
      `
      )
      .join("");
  } catch (e) {
    list.innerHTML = `<div class='error'>Ошибка: ${escapeHtml(e.message || String(e))}</div>`;
  }
}

function formatDate(iso) {
  if (!iso) return "";
  try {
    const d = new Date(iso);
    return d.toLocaleString();
  } catch {
    return iso;
  }
}

function escapeHtml(s) {
  return String(s || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function boot() {
  // views default
  show("loading");

  const { data: sess } = await supabase.auth.getSession();
  if (sess?.session?.user) {
    await onLoggedIn(sess.session.user);
  } else {
    show("auth");
  }

  // auth buttons
  $("#btnSignup").addEventListener("click", async () => {
    const email = $("#authEmail").value.trim();
    const pass = $("#authPass").value.trim();
    const role = $("#roleSelect").value;
    const full = $("#fullName").value.trim();
    const comp = $("#company").value.trim();

    $("#authMsg").textContent = "Создаю аккаунт...";
    try {
      const res = await signUp(email, pass);

      // in many projects, Supabase requires email confirmation.
      // If user is already available, create profile immediately.
      const user = res?.user || res?.data?.user || res?.session?.user;
      if (user) {
        await ensureProfile(user, role, full, comp);
      }

      $("#authMsg").textContent =
        "Готово. Если включено подтверждение email, проверь почту и зайди через Login.";
    } catch (e) {
      $("#authMsg").textContent = `Ошибка: ${e.message || e}`;
    }
  });

  $("#btnLogin").addEventListener("click", async () => {
    const email = $("#authEmail").value.trim();
    const pass = $("#authPass").value.trim();
    $("#authMsg").textContent = "Вхожу...";
    try {
      const res = await signIn(email, pass);
      const user = res?.user || res?.data?.user || res?.session?.user;
      if (!user) throw new Error("Не удалось получить пользователя");
      await onLoggedIn(user);
    } catch (e) {
      $("#authMsg").textContent = `Ошибка: ${e.message || e}`;
    }
  });

  $("#btnLogout").addEventListener("click", async () => {
    await signOut();
    location.reload();
  });

  $("#btnAddLead").addEventListener("click", async () => {
    const title = $("#leadTitle").value.trim();
    const note = $("#leadNote").value.trim();
    const userId = $("#meUserId").textContent.trim();
    if (!title) {
      alert("Заполни название лида");
      return;
    }
    $("#crmMsg").textContent = "Сохраняю...";
    try {
      await createLead(userId, title, note);
      $("#leadTitle").value = "";
      $("#leadNote").value = "";
      $("#crmMsg").textContent = "Сохранено";
      await refreshLeads(userId);
    } catch (e) {
      $("#crmMsg").textContent = `Ошибка: ${e.message || e}`;
    }
  });

  // live session changes
  supabase.auth.onAuthStateChange(async (_event, session) => {
    if (session?.user) {
      await onLoggedIn(session.user);
    }
  });
}

async function onLoggedIn(user) {
  show("loading");
  try {
    // load profile; if not exist, open profile-create view
    let profile = null;
    try {
      profile = await getMyProfile(user.id);
    } catch {
      // show quick create profile
      $("#meUserId").textContent = user.id;
      show("need_profile");
      return;
    }

    $("#meUserId").textContent = user.id;
    $("#meRole").textContent = profile.role || "-";
    $("#meName").textContent = profile.full_name || "-";
    $("#meCompany").textContent = profile.company || "-";

    show("crm");
    $("#crmMsg").textContent = "";
    await refreshLeads(user.id);
  } catch (e) {
    show("auth");
    $("#authMsg").textContent = `Ошибка: ${e.message || e}`;
  }
}

window.addEventListener("DOMContentLoaded", boot);
