/* DolomitPulse.ai — demo CRM logic (no backend)
   - i18n dropdown: RU / KZ / KG / EN / 中文
   - SPA navigation
   - LocalStorage persistence
*/

const LS_KEY = "dp_state_v1";

const LANGS = [
  { code: "ru", label: "Русский" },
  { code: "kz", label: "Қазақша" },
  { code: "kg", label: "Кыргызча" },
  { code: "en", label: "English" },
  { code: "zh", label: "中文" },
];

const I18N = {
  ru: {
    brand: "DolomitPulse.ai",
    tagline: "Платформа для покупателей и поставщиков доломита",
    nav_dashboard: "Дашборд",
    nav_deals: "Сделки",
    nav_contacts: "Контакты",
    nav_docs: "Документы",
    nav_ref: "Реферальные партнёры",
    nav_monitoring: "Мониторинг",
    nav_ai: "AI-переписка",
    nav_settings: "Настройки",
    role_buyer: "Покупатель",
    role_supplier: "Поставщик",
    role_ref: "Реф. партнёр",
    role_admin: "Админ",
    kpi_deals: "Сделки",
    kpi_contacts: "Контакты",
    kpi_points: "Очки",
    kpi_level: "Уровень",
    btn_new_deal: "Создать сделку",
    btn_new_contact: "Добавить контакт",
    btn_upload: "Загрузить базу (CSV)",
    btn_add_doc: "Добавить документ",
    btn_gen_link: "Сгенерировать ссылку",
    btn_copy: "Копировать",
    btn_save: "Сохранить",
    btn_send: "Отправить",
    lbl_language: "Язык",
    lbl_role: "Роль",
    lbl_theme: "Тема",
    txt_light: "Светлая",
    txt_dark: "Тёмная",
    empty: "Пока пусто",
    ai_title: "AI-переписка (шаблоны)",
    ai_hint: "Выбери шаблон и отредактируй под контрагента.",
    tpl_loi: "Запрос LOI (Покупатель → Поставщик)",
    tpl_fco: "Запрос FCO/офера",
    tpl_intro: "Первичный контакт",
    tpl_follow: "Follow-up через 24 часа",
    doc_loi: "LOI",
    doc_spa: "SPA/контракт",
    doc_nda: "NDA",
    doc_other: "Другое",
    deals_title: "Сделки по доломиту",
    contacts_title: "CRM контактов",
    docs_title: "Документы и вложения",
    ref_title: "Реферальные ссылки и статистика",
    mon_title: "Мониторинг сигналов рынка",
    dash_title: "Обзор",
    mon_hint: "Здесь будут сигналы «готов купить/продать» (демо).",
    settings_title: "Настройки проекта",
    toast_saved: "Сохранено",
    toast_copied: "Скопировано",
    csv_hint: "CSV колонки: name,email,phone,company,role",
    col_name: "Имя",
    col_company: "Компания",
    col_email: "Email",
    col_phone: "Телефон",
    col_role: "Роль",
    col_status: "Статус",
    col_amount: "Объём",
    col_price: "Цена",
    col_stage: "Этап",
    stage_lead: "Лид",
    stage_chat: "Переписка",
    stage_docs: "Документы",
    stage_deal: "Сделка",
  },
  kz: {
    brand: "DolomitPulse.ai",
    tagline: "Доломит сатып алушы/жеткізуші платформасы",
    nav_dashboard: "Басқару",
    nav_deals: "Мәмілелер",
    nav_contacts: "Контактілер",
    nav_docs: "Құжаттар",
    nav_ref: "Рефералдар",
    nav_monitoring: "Мониторинг",
    nav_ai: "AI-хат алмасу",
    nav_settings: "Баптау",
    role_buyer: "Сатып алушы",
    role_supplier: "Жеткізуші",
    role_ref: "Реф. серіктес",
    role_admin: "Әкімші",
    kpi_deals: "Мәміле",
    kpi_contacts: "Контакт",
    kpi_points: "Ұпай",
    kpi_level: "Деңгей",
    btn_new_deal: "Мәміле құру",
    btn_new_contact: "Контакт қосу",
    btn_upload: "Базаны жүктеу (CSV)",
    btn_add_doc: "Құжат қосу",
    btn_gen_link: "Сілтеме жасау",
    btn_copy: "Көшіру",
    btn_save: "Сақтау",
    btn_send: "Жіберу",
    lbl_language: "Тіл",
    lbl_role: "Рөл",
    lbl_theme: "Тақырып",
    txt_light: "Жарық",
    txt_dark: "Қараңғы",
    empty: "Әзірше бос",
    ai_title: "AI-хат (үлгілер)",
    ai_hint: "Үлгіні таңда да, контрагентке бейімде.",
    tpl_loi: "LOI сұрау (Сатып алушы → Жеткізуші)",
    tpl_fco: "FCO/офер сұрау",
    tpl_intro: "Бірінші байланыс",
    tpl_follow: "24 сағаттан кейін follow-up",
    doc_loi: "LOI",
    doc_spa: "SPA/келісім",
    doc_nda: "NDA",
    doc_other: "Басқа",
    deals_title: "Доломит мәмілелері",
    contacts_title: "Контакт CRM",
    docs_title: "Құжаттар",
    ref_title: "Реферал сілтемелері",
    mon_title: "Нарық сигналдары",
    dash_title: "Шолу",
    mon_hint: "«Сатып аламын/сатамын» сигналдары (демо).",
    settings_title: "Жоба баптауы",
    toast_saved: "Сақталды",
    toast_copied: "Көшірілді",
    csv_hint: "CSV бағандары: name,email,phone,company,role",
    col_name: "Аты",
    col_company: "Компания",
    col_email: "Email",
    col_phone: "Телефон",
    col_role: "Рөл",
    col_status: "Күйі",
    col_amount: "Көлем",
    col_price: "Баға",
    col_stage: "Кезең",
    stage_lead: "Лид",
    stage_chat: "Хат",
    stage_docs: "Құжат",
    stage_deal: "Мәміле",
  },
  kg: {
    brand: "DolomitPulse.ai",
    tagline: "Доломит сатып алу/сатуу платформасы",
    nav_dashboard: "Дашборд",
    nav_deals: "Келишимдер",
    nav_contacts: "Контакттар",
    nav_docs: "Документтер",
    nav_ref: "Рефералдар",
    nav_monitoring: "Мониторинг",
    nav_ai: "AI-жазышуу",
    nav_settings: "Орнотуулар",
    role_buyer: "Сатып алуучу",
    role_supplier: "Жеткирүүчү",
    role_ref: "Реф. өнөк",
    role_admin: "Админ",
    kpi_deals: "Келишим",
    kpi_contacts: "Контакт",
    kpi_points: "Упай",
    kpi_level: "Деңгээл",
    btn_new_deal: "Келишим түзүү",
    btn_new_contact: "Контакт кошуу",
    btn_upload: "Базаны жүктөө (CSV)",
    btn_add_doc: "Документ кошуу",
    btn_gen_link: "Шилтеме түзүү",
    btn_copy: "Көчүрүү",
    btn_save: "Сактоо",
    btn_send: "Жөнөтүү",
    lbl_language: "Тил",
    lbl_role: "Роль",
    lbl_theme: "Тема",
    txt_light: "Жарык",
    txt_dark: "Караңгы",
    empty: "Азырынча бош",
    ai_title: "AI-жазышуу (шаблондор)",
    ai_hint: "Шаблон тандап, контрагентке ылайыкта.",
    tpl_loi: "LOI суроо (Сатып алуучу → Жеткирүүчү)",
    tpl_fco: "FCO/офер суроо",
    tpl_intro: "Биринчи байланыш",
    tpl_follow: "24 сааттан кийин follow-up",
    doc_loi: "LOI",
    doc_spa: "SPA/келишим",
    doc_nda: "NDA",
    doc_other: "Башка",
    deals_title: "Доломит келишимдери",
    contacts_title: "Контакт CRM",
    docs_title: "Документтер",
    ref_title: "Реферал шилтемелер",
    mon_title: "Базар сигналдары",
    dash_title: "Обзор",
    mon_hint: "«Сатып алам/сатам» сигналдары (демо).",
    settings_title: "Долбоор орнотуулары",
    toast_saved: "Сакталды",
    toast_copied: "Көчүрүлдү",
    csv_hint: "CSV тилкелер: name,email,phone,company,role",
    col_name: "Аты",
    col_company: "Компания",
    col_email: "Email",
    col_phone: "Телефон",
    col_role: "Роль",
    col_status: "Статус",
    col_amount: "Көлөм",
    col_price: "Баа",
    col_stage: "Этап",
    stage_lead: "Лид",
    stage_chat: "Жазышуу",
    stage_docs: "Документ",
    stage_deal: "Келишим",
  },
  en: {
    brand: "DolomitPulse.ai",
    tagline: "A marketplace CRM for dolomite buyers & suppliers",
    nav_dashboard: "Dashboard",
    nav_deals: "Deals",
    nav_contacts: "Contacts",
    nav_docs: "Documents",
    nav_ref: "Referral",
    nav_monitoring: "Monitoring",
    nav_ai: "AI Messaging",
    nav_settings: "Settings",
    role_buyer: "Buyer",
    role_supplier: "Supplier",
    role_ref: "Ref Partner",
    role_admin: "Admin",
    kpi_deals: "Deals",
    kpi_contacts: "Contacts",
    kpi_points: "Points",
    kpi_level: "Level",
    btn_new_deal: "New deal",
    btn_new_contact: "Add contact",
    btn_upload: "Upload base (CSV)",
    btn_add_doc: "Add document",
    btn_gen_link: "Generate link",
    btn_copy: "Copy",
    btn_save: "Save",
    btn_send: "Send",
    lbl_language: "Language",
    lbl_role: "Role",
    lbl_theme: "Theme",
    txt_light: "Light",
    txt_dark: "Dark",
    empty: "Nothing yet",
    ai_title: "AI Messaging (templates)",
    ai_hint: "Pick a template and adapt it to the counterparty.",
    tpl_loi: "Ask for LOI (Buyer → Supplier)",
    tpl_fco: "Ask for FCO/offer",
    tpl_intro: "Initial outreach",
    tpl_follow: "Follow-up in 24h",
    doc_loi: "LOI",
    doc_spa: "SPA/contract",
    doc_nda: "NDA",
    doc_other: "Other",
    deals_title: "Dolomite deals",
    contacts_title: "Contact CRM",
    docs_title: "Documents & attachments",
    ref_title: "Referral links & stats",
    mon_title: "Market signals monitoring",
    dash_title: "Overview",
    mon_hint: "Signals like “ready to buy/sell” (demo).",
    settings_title: "Project settings",
    toast_saved: "Saved",
    toast_copied: "Copied",
    csv_hint: "CSV columns: name,email,phone,company,role",
    col_name: "Name",
    col_company: "Company",
    col_email: "Email",
    col_phone: "Phone",
    col_role: "Role",
    col_status: "Status",
    col_amount: "Volume",
    col_price: "Price",
    col_stage: "Stage",
    stage_lead: "Lead",
    stage_chat: "Chat",
    stage_docs: "Docs",
    stage_deal: "Deal",
  },
  zh: {
    brand: "DolomitPulse.ai",
    tagline: "白云石买卖双方的CRM平台",
    nav_dashboard: "仪表盘",
    nav_deals: "交易",
    nav_contacts: "联系人",
    nav_docs: "文件",
    nav_ref: "推荐伙伴",
    nav_monitoring: "监控",
    nav_ai: "AI对话",
    nav_settings: "设置",
    role_buyer: "买方",
    role_supplier: "供方",
    role_ref: "推荐伙伴",
    role_admin: "管理员",
    kpi_deals: "交易",
    kpi_contacts: "联系人",
    kpi_points: "积分",
    kpi_level: "等级",
    btn_new_deal: "新建交易",
    btn_new_contact: "添加联系人",
    btn_upload: "上传客户表(CSV)",
    btn_add_doc: "添加文件",
    btn_gen_link: "生成链接",
    btn_copy: "复制",
    btn_save: "保存",
    btn_send: "发送",
    lbl_language: "语言",
    lbl_role: "角色",
    lbl_theme: "主题",
    txt_light: "浅色",
    txt_dark: "深色",
    empty: "暂无数据",
    ai_title: "AI对话（模板）",
    ai_hint: "选择模板并按对方信息编辑。",
    tpl_loi: "索要LOI（买方→供方）",
    tpl_fco: "索要FCO/报价",
    tpl_intro: "首次联系",
    tpl_follow: "24小时后跟进",
    doc_loi: "LOI",
    doc_spa: "SPA/合同",
    doc_nda: "NDA",
    doc_other: "其他",
    deals_title: "白云石交易",
    contacts_title: "联系人CRM",
    docs_title: "文件与附件",
    ref_title: "推荐链接与统计",
    mon_title: "市场信号监控",
    dash_title: "概览",
    mon_hint: "“准备买/卖”信号（演示）。",
    settings_title: "项目设置",
    toast_saved: "已保存",
    toast_copied: "已复制",
    csv_hint: "CSV列: name,email,phone,company,role",
    col_name: "姓名",
    col_company: "公司",
    col_email: "邮箱",
    col_phone: "电话",
    col_role: "角色",
    col_status: "状态",
    col_amount: "数量",
    col_price: "价格",
    col_stage: "阶段",
    stage_lead: "线索",
    stage_chat: "沟通",
    stage_docs: "文件",
    stage_deal: "成交",
  },
};

function defaultState() {
  return {
    lang: "ru",
    theme: "dark",
    role: "buyer", // buyer|supplier|ref|admin
    points: 120,
    level: 2,
    contacts: [
      { id: uid(), name: "Zhanibek A.", company: "KZ Minerals", email: "zhanibek@example.com", phone: "+7 700 000 00 00", role: "buyer" },
      { id: uid(), name: "Chen Wei", company: "Qingdao Trade", email: "chen@example.com", phone: "+86 130 0000 0000", role: "buyer" },
      { id: uid(), name: "Aigerim S.", company: "Dolomit Quarry", email: "aigerim@example.com", phone: "+7 701 111 11 11", role: "supplier" },
    ],
    deals: [
      { id: uid(), name: "Dolomite 10,000t / KZ → CN", amount: "10 000 t", price: "$32/t", stage: "chat", status: "active" },
      { id: uid(), name: "Micro-dolomite 1,000t / KZ", amount: "1 000 t", price: "$58/t", stage: "docs", status: "active" },
    ],
    docs: [
      { id: uid(), type: "loi", title: "LOI — Qingdao Trade", createdAt: Date.now() - 86400000 },
      { id: uid(), type: "nda", title: "NDA — KZ Minerals", createdAt: Date.now() - 3 * 86400000 },
    ],
    referrals: [
      { id: uid(), name: "Partner A", code: "DP-A1B2", clicks: 74, leads: 9, deals: 2 },
    ],
    monitoring: [
      { id: uid(), signal: "Buyer: ready to buy 5,000t (CIF)", source: "Telegram/Industry", ts: Date.now() - 2 * 3600000 },
      { id: uid(), signal: "Supplier: dolomite powder available (1,200t)", source: "WhatsApp/Inbound", ts: Date.now() - 6 * 3600000 },
    ],
  };
}

function uid() {
  return Math.random().toString(16).slice(2) + "-" + Date.now().toString(16);
}

function loadState() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw);
    return { ...defaultState(), ...parsed };
  } catch {
    return defaultState();
  }
}

function saveState() {
  localStorage.setItem(LS_KEY, JSON.stringify(state));
  toast(t("toast_saved"));
}

function t(key) {
  const dict = I18N[state.lang] || I18N.ru;
  return dict[key] ?? I18N.ru[key] ?? key;
}

function fmtTime(ts) {
  const d = new Date(ts);
  return d.toLocaleString(undefined, { hour: "2-digit", minute: "2-digit", year: "numeric", month: "2-digit", day: "2-digit" });
}

function toast(msg) {
  const el = document.getElementById("toast");
  if (!el) return;
  el.textContent = msg;
  el.classList.add("show");
  setTimeout(() => el.classList.remove("show"), 1600);
}

let state = loadState();

function init() {
  // header
  $("#brand").textContent = t("brand");
  $("#tagline").textContent = t("tagline");

  // nav
  const navItems = [
    { id: "dashboard", label: t("nav_dashboard") },
    { id: "deals", label: t("nav_deals") },
    { id: "contacts", label: t("nav_contacts") },
    { id: "docs", label: t("nav_docs") },
    { id: "ref", label: t("nav_ref") },
    { id: "monitoring", label: t("nav_monitoring") },
    { id: "ai", label: t("nav_ai") },
    { id: "settings", label: t("nav_settings") },
  ];
  const nav = $("#nav");
  nav.innerHTML = "";
  navItems.forEach((it) => {
    const btn = document.createElement("button");
    btn.className = "nav-item";
    btn.dataset.page = it.id;
    btn.textContent = it.label;
    btn.onclick = () => go(it.id);
    nav.appendChild(btn);
  });

  // language dropdown
  const langSel = $("#langSelect");
  langSel.innerHTML = "";
  LANGS.forEach((l) => {
    const opt = document.createElement("option");
    opt.value = l.code;
    opt.textContent = l.label;
    langSel.appendChild(opt);
  });
  langSel.value = state.lang;
  langSel.onchange = () => {
    state.lang = langSel.value;
    saveState();
    init(); // rerender translations
    go(currentPage, true);
  };

  // role dropdown
  const roleSel = $("#roleSelect");
  roleSel.innerHTML = "";
  const roles = [
    { v: "buyer", k: "role_buyer" },
    { v: "supplier", k: "role_supplier" },
    { v: "ref", k: "role_ref" },
    { v: "admin", k: "role_admin" },
  ];
  roles.forEach((r) => {
    const opt = document.createElement("option");
    opt.value = r.v;
    opt.textContent = t(r.k);
    roleSel.appendChild(opt);
  });
  roleSel.value = state.role;
  roleSel.onchange = () => {
    state.role = roleSel.value;
    saveState();
    go(currentPage, true);
  };

  // theme
  document.documentElement.dataset.theme = state.theme;
  const themeBtn = $("#themeBtn");
  themeBtn.textContent = state.theme === "dark" ? t("txt_dark") : t("txt_light");
  themeBtn.onclick = () => {
    state.theme = state.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = state.theme;
    themeBtn.textContent = state.theme === "dark" ? t("txt_dark") : t("txt_light");
    saveState();
  };

  // KPIs
  renderKPIs();

  // pages
  renderPages();

  // default route
  const hash = location.hash.replace("#", "");
  go(hash || "dashboard", true);
}

function renderKPIs() {
  $("#kpiDealsLabel").textContent = t("kpi_deals");
  $("#kpiContactsLabel").textContent = t("kpi_contacts");
  $("#kpiPointsLabel").textContent = t("kpi_points");
  $("#kpiLevelLabel").textContent = t("kpi_level");

  $("#kpiDeals").textContent = String(state.deals.length);
  $("#kpiContacts").textContent = String(state.contacts.length);
  $("#kpiPoints").textContent = String(state.points);
  $("#kpiLevel").textContent = String(state.level);
}

function addPoints(n) {
  state.points += n;
  const nextLevel = 1 + Math.floor(state.points / 200);
  if (nextLevel > state.level) state.level = nextLevel;
  saveState();
  renderKPIs();
}

function renderPages() {
  // Dashboard
  $("#pageTitle").textContent = t("dash_title");
  $("#dashTitle").textContent = t("dash_title");

  // Deals
  $("#dealsTitle").textContent = t("deals_title");
  $("#btnNewDeal").textContent = t("btn_new_deal");
  $("#btnNewDeal").onclick = () => {
    const name = prompt("Deal name?");
    if (!name) return;
    state.deals.unshift({ id: uid(), name, amount: "—", price: "—", stage: "lead", status: "active" });
    addPoints(10);
    saveState();
    renderDeals();
  };
  renderDeals();

  // Contacts
  $("#contactsTitle").textContent = t("contacts_title");
  $("#btnNewContact").textContent = t("btn_new_contact");
  $("#btnUpload").textContent = t("btn_upload");
  $("#csvHint").textContent = t("csv_hint");
  $("#btnNewContact").onclick = () => {
    const name = prompt("Name?");
    if (!name) return;
    const company = prompt("Company?") || "";
    const email = prompt("Email?") || "";
    const phone = prompt("Phone?") || "";
    state.contacts.unshift({ id: uid(), name, company, email, phone, role: state.role });
    addPoints(5);
    saveState();
    renderContacts();
  };
  $("#fileInput").onchange = handleCSVUpload;
  $("#btnUpload").onclick = () => $("#fileInput").click();
  renderContacts();

  // Docs
  $("#docsTitle").textContent = t("docs_title");
  $("#btnAddDoc").textContent = t("btn_add_doc");
  $("#btnAddDoc").onclick = () => {
    const title = prompt("Document title?");
    if (!title) return;
    const type = prompt("Type: loi / spa / nda / other", "loi") || "other";
    state.docs.unshift({ id: uid(), type: normalizeDocType(type), title, createdAt: Date.now() });
    addPoints(8);
    saveState();
    renderDocs();
  };
  renderDocs();

  // Referral
  $("#refTitle").textContent = t("ref_title");
  $("#btnGenLink").textContent = t("btn_gen_link");
  $("#btnGenLink").onclick = () => {
    const name = prompt("Partner name?");
    if (!name) return;
    const code = "DP-" + Math.random().toString(36).slice(2, 6).toUpperCase() + Math.random().toString(36).slice(2, 4).toUpperCase();
    state.referrals.unshift({ id: uid(), name, code, clicks: 0, leads: 0, deals: 0 });
    addPoints(12);
    saveState();
    renderRef();
  };
  renderRef();

  // Monitoring
  $("#monTitle").textContent = t("mon_title");
  $("#monHint").textContent = t("mon_hint");
  renderMonitoring();

  // AI templates
  $("#aiTitle").textContent = t("ai_title");
  $("#aiHint").textContent = t("ai_hint");
  renderAI();

  // Settings
  $("#settingsTitle").textContent = t("settings_title");
  $("#btnReset").onclick = () => {
    if (!confirm("Reset demo data?")) return;
    localStorage.removeItem(LS_KEY);
    state = loadState();
    init();
  };
}

function normalizeDocType(x) {
  const v = String(x).toLowerCase().trim();
  if (v === "loi") return "loi";
  if (v === "spa") return "spa";
  if (v === "nda") return "nda";
  return "other";
}

function renderDeals() {
  const el = $("#dealsList");
  el.innerHTML = "";
  if (!state.deals.length) {
    el.innerHTML = `<div class="empty">${t("empty")}</div>`;
    return;
  }
  const head = row([
    th(t("col_name")),
    th(t("col_amount")),
    th(t("col_price")),
    th(t("col_stage")),
    th(t("col_status")),
  ]);
  const body = document.createElement("div");
  body.className = "table";
  body.appendChild(head);

  state.deals.forEach((d) => {
    const stage = stageLabel(d.stage);
    const r = row([
      td(d.name),
      td(d.amount),
      td(d.price),
      td(stage, "badge"),
      td(d.status, "badge soft"),
    ]);
    r.onclick = () => {
      const next = nextStage(d.stage);
      d.stage = next;
      addPoints(3);
      saveState();
      renderDeals();
    };
    body.appendChild(r);
  });
  el.appendChild(body);
}

function stageLabel(stage) {
  const map = {
    lead: t("stage_lead"),
    chat: t("stage_chat"),
    docs: t("stage_docs"),
    deal: t("stage_deal"),
  };
  return map[stage] || stage;
}

function nextStage(stage) {
  const order = ["lead", "chat", "docs", "deal"];
  const i = order.indexOf(stage);
  return order[(i + 1) % order.length];
}

function renderContacts() {
  const el = $("#contactsList");
  el.innerHTML = "";
  if (!state.contacts.length) {
    el.innerHTML = `<div class="empty">${t("empty")}</div>`;
    return;
  }
  const head = row([
    th(t("col_name")),
    th(t("col_company")),
    th(t("col_email")),
    th(t("col_phone")),
    th(t("col_role")),
  ]);
  const body = document.createElement("div");
  body.className = "table";
  body.appendChild(head);

  state.contacts.forEach((c) => {
    const r = row([
      td(c.name),
      td(c.company || "—"),
      td(c.email || "—"),
      td(c.phone || "—"),
      td(c.role || "—", "badge"),
    ]);
    r.onclick = () => {
      navigator.clipboard?.writeText(`${c.name} | ${c.company} | ${c.email} | ${c.phone}`).then(() => toast(t("toast_copied")));
    };
    body.appendChild(r);
  });
  el.appendChild(body);
}

function handleCSVUpload(e) {
  const file = e.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    const text = String(reader.result || "");
    const rows = parseCSV(text);
    if (!rows.length) return;
    rows.forEach((r) => {
      state.contacts.unshift({
        id: uid(),
        name: r.name || "—",
        email: r.email || "",
        phone: r.phone || "",
        company: r.company || "",
        role: r.role || state.role,
      });
    });
    addPoints(20);
    saveState();
    renderContacts();
    $("#fileInput").value = "";
  };
  reader.readAsText(file);
}

function parseCSV(text) {
  // very simple CSV: header required
  const lines = text.split(/\r?\n/).map((x) => x.trim()).filter(Boolean);
  if (lines.length < 2) return [];
  const headers = splitCSVLine(lines[0]).map((h) => h.trim().toLowerCase());
  const out = [];
  for (let i = 1; i < lines.length; i++) {
    const cols = splitCSVLine(lines[i]);
    const obj = {};
    headers.forEach((h, idx) => (obj[h] = (cols[idx] ?? "").trim()));
    out.push(obj);
  }
  return out;
}

function splitCSVLine(line) {
  const res = [];
  let cur = "";
  let q = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"' ) { q = !q; continue; }
    if (ch === "," && !q) { res.push(cur); cur = ""; continue; }
    cur += ch;
  }
  res.push(cur);
  return res;
}

function renderDocs() {
  const el = $("#docsList");
  el.innerHTML = "";
  if (!state.docs.length) {
    el.innerHTML = `<div class="empty">${t("empty")}</div>`;
    return;
  }
  state.docs.forEach((d) => {
    const card = document.createElement("div");
    card.className = "card small";
    const typeLabel =
      d.type === "loi" ? t("doc_loi") :
      d.type === "spa" ? t("doc_spa") :
      d.type === "nda" ? t("doc_nda") :
      t("doc_other");
    card.innerHTML = `
      <div class="row between">
        <div>
          <div class="muted">${typeLabel}</div>
          <div class="title">${escapeHtml(d.title)}</div>
          <div class="muted">${fmtTime(d.createdAt)}</div>
        </div>
        <button class="btn ghost" data-act="copy">${t("btn_copy")}</button>
      </div>
    `;
    card.querySelector('[data-act="copy"]').onclick = () => {
      navigator.clipboard?.writeText(d.title).then(() => toast(t("toast_copied")));
    };
    el.appendChild(card);
  });
}

function renderRef() {
  const el = $("#refList");
  el.innerHTML = "";
  if (!state.referrals.length) {
    el.innerHTML = `<div class="empty">${t("empty")}</div>`;
    return;
  }
  state.referrals.forEach((r) => {
    const url = `https://dolomitpulse.ai/?ref=${encodeURIComponent(r.code)}`;
    const card = document.createElement("div");
    card.className = "card small";
    card.innerHTML = `
      <div class="row between">
        <div>
          <div class="title">${escapeHtml(r.name)}</div>
          <div class="muted">${escapeHtml(r.code)}</div>
          <div class="muted">${escapeHtml(url)}</div>
        </div>
        <div class="stat">
          <div class="statItem"><div class="muted">Clicks</div><div class="big">${r.clicks}</div></div>
          <div class="statItem"><div class="muted">Leads</div><div class="big">${r.leads}</div></div>
          <div class="statItem"><div class="muted">Deals</div><div class="big">${r.deals}</div></div>
        </div>
      </div>
      <div class="row gap">
        <button class="btn" data-act="copy">${t("btn_copy")}</button>
        <button class="btn ghost" data-act="simulate">Simulate +</button>
      </div>
    `;
    card.querySelector('[data-act="copy"]').onclick = () => {
      navigator.clipboard?.writeText(url).then(() => toast(t("toast_copied")));
    };
    card.querySelector('[data-act="simulate"]').onclick = () => {
      r.clicks += 1;
      if (Math.random() < 0.18) r.leads += 1;
      if (Math.random() < 0.06) r.deals += 1;
      addPoints(2);
      saveState();
      renderRef();
    };
    el.appendChild(card);
  });
}

function renderMonitoring() {
  const el = $("#monList");
  el.innerHTML = "";
  if (!state.monitoring.length) {
    el.innerHTML = `<div class="empty">${t("empty")}</div>`;
    return;
  }
  state.monitoring
    .slice()
    .sort((a, b) => b.ts - a.ts)
    .forEach((m) => {
      const card = document.createElement("div");
      card.className = "card small";
      card.innerHTML = `
        <div class="title">${escapeHtml(m.signal)}</div>
        <div class="muted">${escapeHtml(m.source)} • ${fmtTime(m.ts)}</div>
      `;
      el.appendChild(card);
    });

  // small demo: add random signal each refresh
  const btn = $("#btnAddSignal");
  btn.onclick = () => {
    state.monitoring.unshift({
      id: uid(),
      signal: randomSignal(),
      source: "Manual",
      ts: Date.now(),
    });
    addPoints(4);
    saveState();
    renderMonitoring();
  };
}

function randomSignal() {
  const arr = [
    "Buyer: request 3,000t dolomite (FOB)",
    "Supplier: 8,500t available (CIF)",
    "Buyer: needs dolomite powder 200 mesh",
    "Supplier: quarry offers 20,000t/month",
  ];
  return arr[Math.floor(Math.random() * arr.length)];
}

function renderAI() {
  const select = $("#tplSelect");
  select.innerHTML = "";
  const tpls = [
    { id: "tpl_intro", key: "tpl_intro" },
    { id: "tpl_loi", key: "tpl_loi" },
    { id: "tpl_fco", key: "tpl_fco" },
    { id: "tpl_follow", key: "tpl_follow" },
  ];
  tpls.forEach((x) => {
    const opt = document.createElement("option");
    opt.value = x.id;
    opt.textContent = t(x.key);
    select.appendChild(opt);
  });

  const textarea = $("#aiText");
  textarea.value = buildTemplate("tpl_intro");

  select.onchange = () => {
    textarea.value = buildTemplate(select.value);
  };

  $("#btnSend").textContent = t("btn_send");
  $("#btnSend").onclick = () => {
    addPoints(3);
    toast(t("toast_saved"));
  };
}

function buildTemplate(id) {
  const base = {
    tpl_intro: `Hello! We work with dolomite. Please share availability, specs (CaCO3/MgO), origin, and logistics options.`,
    tpl_loi: `Добрый день! Просим направить LOI/письмо-намерение и условия поставки по доломиту: объём, спецификация, Incoterms, порт/станция, график.`,
    tpl_fco: `Please provide FCO/offer with price, payment terms, origin, and required documents (COA, SGS, etc.).`,
    tpl_follow: `Напоминаю о нашем запросе по доломиту. Подскажите, когда сможете прислать условия/документы?`,
  };
  // localize a bit for RU/KZ/KG/EN/ZH
  if (state.lang === "zh") {
    return `你好！我们对白云石有采购/销售需求。请提供规格、数量、价格、交货条款（Incoterms）以及可提供的文件（COA/SGS等）。`;
  }
  if (state.lang === "kz") {
    return `Сәлеметсіз бе! Доломит бойынша көлем, спецификация, баға, Incoterms және құжаттар (COA/SGS) туралы ақпарат жіберіңіз.`;
  }
  if (state.lang === "kg") {
    return `Саламатсызбы! Доломит боюнча көлөм, спецификация, баа, Incoterms жана документтер (COA/SGS) тууралуу маалымат жибериңиз.`;
  }
  if (state.lang === "ru") {
    return base[id] || base.tpl_intro;
  }
  return base[id] || base.tpl_intro;
}

let currentPage = "dashboard";

function go(page, silent) {
  const pages = ["dashboard","deals","contacts","docs","ref","monitoring","ai","settings"];
  if (!pages.includes(page)) page = "dashboard";
  currentPage = page;

  // set hash
  if (!silent) location.hash = page;

  // nav active
  document.querySelectorAll(".nav-item").forEach((b) => {
    b.classList.toggle("active", b.dataset.page === page);
  });

  // show page
  document.querySelectorAll("[data-page]").forEach((p) => {
    p.classList.toggle("hidden", p.dataset.page !== page);
  });

  // title
  $("#pageTitle").textContent =
    page === "dashboard" ? t("dash_title") :
    page === "deals" ? t("nav_deals") :
    page === "contacts" ? t("nav_contacts") :
    page === "docs" ? t("nav_docs") :
    page === "ref" ? t("nav_ref") :
    page === "monitoring" ? t("nav_monitoring") :
    page === "ai" ? t("nav_ai") :
    t("nav_settings");
}

function $(sel) {
  return document.querySelector(sel);
}

function row(children) {
  const r = document.createElement("div");
  r.className = "tr";
  children.forEach((c) => r.appendChild(c));
  return r;
}
function th(txt) {
  const c = document.createElement("div");
  c.className = "th";
  c.textContent = txt;
  return c;
}
function td(txt, cls) {
  const c = document.createElement("div");
  c.className = "td" + (cls ? " " + cls : "");
  c.textContent = txt;
  return c;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (m) => ({
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    '"':"&quot;",
    "'":"&#39;",
  }[m]));
}

window.addEventListener("hashchange", () => {
  const hash = location.hash.replace("#", "");
  go(hash, true);
});

window.addEventListener("DOMContentLoaded", init);
