// DolomitPulse CRM (demo/local) — 5 languages, roles, modules
const LANGS = [
  { code: "ru", label: "Русский" },
  { code: "kk", label: "Қазақша" },
  { code: "ky", label: "Кыргызча" },
  { code: "en", label: "English" },
  { code: "zh", label: "中文" },
];

const I18N = {
  ru: {
    brandSub: "CRM + мониторинг рынка доломита",
    navTitle: "Навигация",
    dashboard: "Дашборд",
    deals: "Сделки",
    contacts: "Контакты",
    monitoring: "Мониторинг",
    referrals: "Рефералы",
    docs: "Документы",
    ai: "AI-переписка",
    settings: "Настройки",
    roleTitle: "Роль",
    roleBuyer: "Покупатель",
    roleSupplier: "Поставщик",
    roleReferral: "Реферальный партнёр",
    roleAdmin: "Админ",
    hTitle: "Рабочая область DolomitPulse",
    hText:
      "CRM для доломита: сделки, контакты, рефералы, мониторинг рынка, документы и AI-шаблоны переписки.",
    quickAdd: "Быстро добавить",
    export: "Экспорт JSON",
    import: "Импорт JSON",
    search: "Поиск...",
    kpiDeals: "Активные сделки",
    kpiContacts: "Контакты",
    kpiSignals: "Сигналы мониторинга",
    kpiXP: "XP (геймификация)",
    hint:
      "Данные сейчас в браузере (localStorage). Подключение Supabase — следующий этап.",
    v_dashboard_title: "Дашборд",
    v_deals_title: "Сделки",
    v_contacts_title: "Контакты",
    v_monitor_title: "Мониторинг",
    v_ref_title: "Рефералы",
    v_docs_title: "Документы",
    v_ai_title: "AI-переписка",
    v_settings_title: "Настройки",
    theme: "Тема",
  },
  kk: {
    brandSub: "Доломит нарығын мониторинг + CRM",
    navTitle: "Навигация",
    dashboard: "Басқару тақтасы",
    deals: "Мәмілелер",
    contacts: "Контактілер",
    monitoring: "Мониторинг",
    referrals: "Рефералдар",
    docs: "Құжаттар",
    ai: "AI-хат алмасу",
    settings: "Баптаулар",
    roleTitle: "Рөл",
    roleBuyer: "Сатып алушы",
    roleSupplier: "Жеткізуші",
    roleReferral: "Реферал серіктес",
    roleAdmin: "Әкімші",
    hTitle: "DolomitPulse жұмыс аймағы",
    hText:
      "Доломитке арналған CRM: мәміле, контакт, реферал, нарық мониторингі, құжаттар және AI-шаблондар.",
    quickAdd: "Жылдам қосу",
    export: "JSON экспорт",
    import: "JSON импорт",
    search: "Іздеу...",
    kpiDeals: "Белсенді мәміле",
    kpiContacts: "Контакт",
    kpiSignals: "Мониторинг сигналдары",
    kpiXP: "XP (геймификация)",
    hint:
      "Деректер қазір браузерде (localStorage). Supabase қосу — келесі кезең.",
    v_dashboard_title: "Басқару тақтасы",
    v_deals_title: "Мәмілелер",
    v_contacts_title: "Контактілер",
    v_monitor_title: "Мониторинг",
    v_ref_title: "Рефералдар",
    v_docs_title: "Құжаттар",
    v_ai_title: "AI-хат алмасу",
    v_settings_title: "Баптаулар",
    theme: "Тақырып",
  },
  ky: {
    brandSub: "Доломит рыногун мониторинг + CRM",
    navTitle: "Навигация",
    dashboard: "Башкаруу панели",
    deals: "Бүтүмдөр",
    contacts: "Контактылар",
    monitoring: "Мониторинг",
    referrals: "Рефералдар",
    docs: "Документтер",
    ai: "AI-кат алышуу",
    settings: "Орнотуулар",
    roleTitle: "Роль",
    roleBuyer: "Сатып алуучу",
    roleSupplier: "Жеткирүүчү",
    roleReferral: "Реферал өнөктөш",
    roleAdmin: "Админ",
    hTitle: "DolomitPulse иш мейкиндиги",
    hText:
      "Доломит үчүн CRM: бүтүм, контакт, реферал, рынок мониторинги, документтер жана AI-шаблондор.",
    quickAdd: "Тез кошуу",
    export: "JSON экспорт",
    import: "JSON импорт",
    search: "Издөө...",
    kpiDeals: "Активдүү бүтүмдөр",
    kpiContacts: "Контактылар",
    kpiSignals: "Мониторинг сигналдары",
    kpiXP: "XP (геймификация)",
    hint:
      "Маалымат азыр браузерде (localStorage). Supabase кошуу — кийинки этап.",
    v_dashboard_title: "Башкаруу панели",
    v_deals_title: "Бүтүмдөр",
    v_contacts_title: "Контактылар",
    v_monitor_title: "Мониторинг",
    v_ref_title: "Рефералдар",
    v_docs_title: "Документтер",
    v_ai_title: "AI-кат алышуу",
    v_settings_title: "Орнотуулар",
    theme: "Тема",
  },
  en: {
    brandSub: "CRM + dolomite market monitoring",
    navTitle: "Navigation",
    dashboard: "Dashboard",
    deals: "Deals",
    contacts: "Contacts",
    monitoring: "Monitoring",
    referrals: "Referrals",
    docs: "Documents",
    ai: "AI chat",
    settings: "Settings",
    roleTitle: "Role",
    roleBuyer: "Buyer",
    roleSupplier: "Supplier",
    roleReferral: "Referral partner",
    roleAdmin: "Admin",
    hTitle: "DolomitPulse workspace",
    hText:
      "Dolomite CRM: deals, contacts, referrals, market monitoring, documents and AI templates.",
    quickAdd: "Quick add",
    export: "Export JSON",
    import: "Import JSON",
    search: "Search...",
    kpiDeals: "Active deals",
    kpiContacts: "Contacts",
    kpiSignals: "Monitoring signals",
    kpiXP: "XP (gamification)",
    hint:
      "Data is stored in your browser (localStorage). Supabase integration is the next stage.",
    v_dashboard_title: "Dashboard",
    v_deals_title: "Deals",
    v_contacts_title: "Contacts",
    v_monitor_title: "Monitoring",
    v_ref_title: "Referrals",
    v_docs_title: "Documents",
    v_ai_title: "AI chat",
    v_settings_title: "Settings",
    theme: "Theme",
  },
  zh: {
    brandSub: "白云石市场监控 + CRM",
    navTitle: "导航",
    dashboard: "仪表盘",
    deals: "交易",
    contacts: "联系人",
    monitoring: "监控",
    referrals: "推荐",
    docs: "文件",
    ai: "AI 对话",
    settings: "设置",
    roleTitle: "角色",
    roleBuyer: "买方",
    roleSupplier: "供应商",
    roleReferral: "推荐合作伙伴",
    roleAdmin: "管理员",
    hTitle: "DolomitPulse 工作区",
    hText:
      "白云石 CRM：交易、联系人、推荐、市场监控、文件与 AI 模板对话。",
    quickAdd: "快速添加",
    export: "导出 JSON",
    import: "导入 JSON",
    search: "搜索...",
    kpiDeals: "活跃交易",
    kpiContacts: "联系人",
    kpiSignals: "监控信号",
    kpiXP: "XP（游戏化）",
    hint:
      "数据保存在浏览器（localStorage）。接入 Supabase 是下一阶段。",
    v_dashboard_title: "仪表盘",
    v_deals_title: "交易",
    v_contacts_title: "联系人",
    v_monitor_title: "监控",
    v_ref_title: "推荐",
    v_docs_title: "文件",
    v_ai_title: "AI 对话",
    v_settings_title: "设置",
    theme: "主题",
  },
};

const ROLES = [
  { code: "buyer", pillKey: "roleBuyer" },
  { code: "supplier", pillKey: "roleSupplier" },
  { code: "referral", pillKey: "roleReferral" },
  { code: "admin", pillKey: "roleAdmin" },
];

const STORE_KEY = "dp_data_v1";
const PREF_KEY = "dp_pref_v1";

const defaultData = () => ({
  deals: [],
  contacts: [],
  signals: [],
  docs: [],
  referrals: [],
  xp: 0,
});

function loadData() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    return raw ? JSON.parse(raw) : defaultData();
  } catch {
    return defaultData();
  }
}
function saveData(d) {
  localStorage.setItem(STORE_KEY, JSON.stringify(d));
}
function loadPref() {
  try {
    const raw = localStorage.getItem(PREF_KEY);
    return raw
      ? JSON.parse(raw)
      : { lang: "ru", role: "buyer", theme: "dark" };
  } catch {
    return { lang: "ru", role: "buyer", theme: "dark" };
  }
}
function savePref(p) {
  localStorage.setItem(PREF_KEY, JSON.stringify(p));
}

let data = loadData();
let pref = loadPref();
let view = "dashboard";

function $(id) { return document.getElementById(id); }
function t(key) {
  const dict = I18N[pref.lang] || I18N.ru;
  return dict[key] || (I18N.ru[key] ?? key);
}

function setText(id, key) {
  const el = $(id);
  if (el) el.textContent = t(key);
}

function initLangSelect() {
  const sel = $("langSelect");
  sel.innerHTML = "";
  for (const l of LANGS) {
    const opt = document.createElement("option");
    opt.value = l.code;
    opt.textContent = l.label;
    if (l.code === pref.lang) opt.selected = true;
    sel.appendChild(opt);
  }
  sel.addEventListener("change", () => {
    pref.lang = sel.value;
    savePref(pref);
    renderAll();
  });
}

function initRoleButtons() {
  document.querySelectorAll(".roleBtn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".roleBtn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      pref.role = btn.dataset.role;
      savePref(pref);
      renderRolePill();
      renderView(); // role affects view hints
    });
  });

  // set active on load
  document.querySelectorAll(".roleBtn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.role === pref.role);
  });
}

function initNav() {
  document.querySelectorAll(".navItem").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".navItem").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      view = btn.dataset.view;
      renderView();
    });
  });
}

function renderRolePill() {
  const pill = $("rolePill");
  const roleKey =
    pref.role === "buyer" ? "roleBuyer" :
    pref.role === "supplier" ? "roleSupplier" :
    pref.role === "referral" ? "roleReferral" : "roleAdmin";
  pill.textContent = t(roleKey);
}

function renderTopTexts() {
  $("brandSub").textContent = t("brandSub");
  setText("navTitle", "navTitle");
  setText("navDashboard", "dashboard");
  setText("navDeals", "deals");
  setText("navContacts", "contacts");
  setText("navMonitoring", "monitoring");
  setText("navReferrals", "referrals");
  setText("navDocs", "docs");
  setText("navAI", "ai");
  setText("navSettings", "settings");
  setText("roleTitle", "roleTitle");
  setText("roleBuyer", "roleBuyer");
  setText("roleSupplier", "roleSupplier");
  setText("roleReferral", "roleReferral");
  setText("roleAdmin", "roleAdmin");
  setText("hTitle", "hTitle");
  setText("hText", "hText");
  $("btnQuickAdd").textContent = t("quickAdd");
  $("btnExport").textContent = t("export");
  document.querySelector(".fileLabel").lastChild.textContent = t("import");
  $("searchInput").placeholder = t("search");
  $("btnTheme").textContent = t("theme");
  $("miniHint").textContent = t("hint");
}

function renderKPI() {
  $("kpiDealsLabel").textContent = t("kpiDeals");
  $("kpiContactsLabel").textContent = t("kpiContacts");
  $("kpiSignalsLabel").textContent = t("kpiSignals");
  $("kpiXPLabel").textContent = t("kpiXP");
  $("kpiDeals").textContent = String(data.deals.filter(d => d.status !== "closed").length);
  $("kpiContacts").textContent = String(data.contacts.length);
  $("kpiSignals").textContent = String(data.signals.length);
  $("kpiXP").textContent = String(data.xp || 0);
}

function el(tag, cls, text) {
  const x = document.createElement(tag);
  if (cls) x.className = cls;
  if (text != null) x.textContent = text;
  return x;
}

function renderViewTitle() {
  const map = {
    dashboard: "v_dashboard_title",
    deals: "v_deals_title",
    contacts: "v_contacts_title",
    monitoring: "v_monitor_title",
    referrals: "v_ref_title",
    docs: "v_docs_title",
    ai: "v_ai_title",
    settings: "v_settings_title",
  };
  $("viewTitle").textContent = t(map[view] || "v_dashboard_title");
}

function matchesSearch(obj, q) {
  if (!q) return true;
  const s = JSON.stringify(obj).toLowerCase();
  return s.includes(q.toLowerCase());
}

function renderDashboard(container, q) {
  const grid = el("div", "grid");
  const c1 = el("div", "card");
  c1.appendChild(el("div", "cardTitle", t("v_dashboard_title")));
  c1.appendChild(el("div", "cardText",
    "• MSA (Market Scan Agent) — следующий этап: подключим источники и авто-сигналы.\n" +
    "• Сейчас работает база, роли, рефералы, мониторинг, документы, геймификация (локально)."
  ));
  const badges = el("div", "badgeRow");
  ["CRM", "Dolomite", "Monitoring", "Referrals", "Docs", "AI Templates"].forEach(b => {
    badges.appendChild(el("span", "badge", b));
  });
  c1.appendChild(badges);

  const c2 = el("div", "card");
  c2.appendChild(el("div", "cardTitle", "Быстрые действия"));
  c2.appendChild(el("div", "cardText",
    "Нажми “Быстро добавить”, чтобы создать демо-сделку/контакт/сигнал.\n" +
    "Экспорт/импорт JSON — для переноса данных между телефонами."
  ));

  const c3 = el("div", "card");
  c3.appendChild(el("div", "cardTitle", "Мониторинг (демо)"));
  const list = data.signals.filter(s => matchesSearch(s, q)).slice(0,5);
  c3.appendChild(el("div", "cardText",
    list.length ? list.map(s => `• ${s.title}`).join("\n") : "Пока нет сигналов."
  ));

  const c4 = el("div", "card");
  c4.appendChild(el("div", "cardTitle", "Геймификация"));
  c4.appendChild(el("div", "cardText",
    `XP: ${data.xp || 0}\n` +
    "Правила: +5 за сделку, +2 за контакт, +3 за сигнал, +1 за документ."
  ));

  grid.appendChild(c1); grid.appendChild(c2); grid.appendChild(c3); grid.appendChild(c4);
  container.appendChild(grid);
}

function renderTable(container, columns, rows) {
  const table = el("table", "table");
  const thead = el("thead");
  const trh = el("tr");
  columns.forEach(c => trh.appendChild(el("th", "", c)));
  thead.appendChild(trh);
  table.appendChild(thead);

  const tbody = el("tbody");
  rows.forEach(r => {
    const tr = el("tr");
    r.forEach(cell => tr.appendChild(el("td", "", cell)));
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  container.appendChild(table);
}

function renderDeals(container, q) {
  const rows = data.deals
    .filter(d => matchesSearch(d, q))
    .map(d => [d.id, d.title, d.counterparty, d.qty, d.price, d.status]);
  renderTable(container,
    ["ID","Сделка","Контрагент","Объём","Цена","Статус"],
    rows.length ? rows : [["—","Нет сделок","","","",""]]
  );
}

function renderContacts(container, q) {
  const rows = data.contacts
    .filter(c => matchesSearch(c, q))
    .map(c => [c.id, c.name, c.company, c.email || "—", c.phone || "—"]);
  renderTable(container,
    ["ID","Имя","Компания","Email","Телефон"],
    rows.length ? rows : [["—","Нет контактов","","",""]]
  );
}

function renderMonitoring(container, q) {
  const rows = data.signals
    .filter(s => matchesSearch(s, q))
    .map(s => [s.id, s.title, s.source, s.priority, s.status]);
  renderTable(container,
    ["ID","Сигнал","Источник","Приоритет","Статус"],
    rows.length ? rows : [["—","Нет сигналов","","",""]]
  );
}

function renderReferrals(container, q) {
  const rows = data.referrals
    .filter(r => matchesSearch(r, q))
    .map(r => [r.id, r.name, r.channel, r.clicks, r.leads, r.deals]);
  renderTable(container,
    ["ID","Партнёр","Канал","Клики","Лиды","Сделки"],
    rows.length ? rows : [["—","Нет рефералов","","","",""]]
  );
}

function renderDocs(container, q) {
  const rows = data.docs
    .filter(d => matchesSearch(d, q))
    .map(d => [d.id, d.type, d.title, d.counterparty, d.status]);
  renderTable(container,
    ["ID","Тип","Название","Контрагент","Статус"],
    rows.length ? rows : [["—","Нет документов","","",""]]
  );
}

function renderAI(container) {
  const card = el("div", "card");
  card.appendChild(el("div", "cardTitle", "AI-переписка (демо-шаблоны)"));
  card.appendChild(el("div", "cardText",
    "Здесь будет подключение к открытому AI (следующий этап):\n" +
    "• шаблоны сообщений под доломит (запрос цены, LOI, FCO)\n" +
    "• настройка под каждого покупателя/поставщика\n" +
    "• вложения документов из раздела “Документы”."
  ));
  container.appendChild(card);
}

function renderSettings(container) {
  const card = el("div", "card");
  card.appendChild(el("div", "cardTitle", "Настройки проекта"));
  card.appendChild(el("div", "cardText",
    "1) Сейчас: локальная демо-CRM (без сервера).\n" +
    "2) Дальше: подключим Supabase (Auth, таблицы, RLS) и загрузку файлов (Storage).\n" +
    "3) AI: подключим open-source модель через бесплатный слой/серверless."
  ));
  container.appendChild(card);
}

function renderView() {
  renderViewTitle();
  const q = $("searchInput").value.trim();
  const container = $("viewContainer");
  container.innerHTML = "";

  if (view === "dashboard") return renderDashboard(container, q);
  if (view === "deals") return renderDeals(container, q);
  if (view === "contacts") return renderContacts(container, q);
  if (view === "monitoring") return renderMonitoring(container, q);
  if (view === "referrals") return renderReferrals(container, q);
  if (view === "docs") return renderDocs(container, q);
  if (view === "ai") return renderAI(container, q);
  if (view === "settings") return renderSettings(container, q);
}

function addXP(n) {
  data.xp = (data.xp || 0) + n;
  saveData(data);
  renderKPI();
}

function quickAdd() {
  const now = Date.now();
  // add 1 deal, 1 contact, 1 signal, 1 doc, 1 referral (role-based flavor)
  const id = String(now).slice(-6);

  data.deals.unshift({
    id: "D" + id,
    title: "Поставка доломита (демо)",
    counterparty: pref.role === "buyer" ? "Поставщик: Demo Quarry" : "Покупатель: Demo Plant",
    qty: "1000 т",
    price: "FOB / CIF",
    status: "active",
    createdAt: now,
  }); addXP(5);

  data.contacts.unshift({
    id: "C" + id,
    name: "Контакт Demo",
    company: pref.role === "buyer" ? "Demo Plant" : "Demo Quarry",
    email: "demo@dolomitpulse.ai",
    phone: "+7 000 000 00 00",
    createdAt: now,
  }); addXP(2);

  data.signals.unshift({
    id: "S" + id,
    title: pref.role === "buyer"
      ? "Сигнал: покупатель ищет доломит (демо)"
      : "Сигнал: поставщик готов продать доломит (демо)",
    source: "MSA (demo)",
    priority: "High",
    status: "new",
    createdAt: now,
  }); addXP(3);

  data.docs.unshift({
    id: "F" + id,
    type: "LOI",
    title: "LOI (демо)",
    counterparty: "Demo Counterparty",
    status: "draft",
    createdAt: now,
  }); addXP(1);

  data.referrals.unshift({
    id: "R" + id,
    name: "Partner Demo",
    channel: "Telegram",
    clicks: 12,
    leads: 2,
    deals: 1,
    createdAt: now,
  }); addXP(2);

  saveData(data);
  renderKPI();
  renderView();
}

function exportJSON() {
  const payload = { pref, data, exportedAt: new Date().toISOString() };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "dolomitpulse-export.json";
  a.click();
  URL.revokeObjectURL(a.href);
}

function importJSON(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const obj = JSON.parse(reader.result);
      if (obj && obj.data) data = obj.data;
      if (obj && obj.pref) pref = obj.pref;
      saveData(data);
      savePref(pref);
      initLangSelect();
      initRoleButtons();
      renderAll();
    } catch {
      alert("Неверный JSON");
    }
  };
  reader.readAsText(file);
}

function toggleTheme() {
  // simple: only dark now; keep hook for future
  alert("Тема: тёмная (позже добавим светлую).");
}

function renderAll() {
  renderTopTexts();
  renderRolePill();
  renderKPI();
  renderView();
}

document.addEventListener("DOMContentLoaded", () => {
  initLangSelect();
  initRoleButtons();
  initNav();

  $("btnQuickAdd").addEventListener("click", quickAdd);
  $("btnExport").addEventListener("click", exportJSON);
  $("importFile").addEventListener("change", (e) => {
    const f = e.target.files && e.target.files[0];
    if (f) importJSON(f);
    e.target.value = "";
  });
  $("btnTheme").addEventListener("click", toggleTheme);
  $("searchInput").addEventListener("input", renderView);

  renderAll();
});
