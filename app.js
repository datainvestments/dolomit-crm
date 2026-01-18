// DolomitPulse CRM — i18n (RU/EN/KK/KY/ZH) + dropdown
const LANGS = [
  { code: "ru", label: "Русский" },
  { code: "en", label: "English" },
  { code: "kk", label: "Қазақша" },
  { code: "ky", label: "Кыргызча" },
  { code: "zh", label: "中文" },
];

const I18N = {
  ru: {
    appName: "DolomitPulse CRM",
    lang: "Язык",
    home: "Главная",
    clients: "Клиенты",
    deals: "Сделки",
    docs: "Документы",
    referrals: "Рефералы",
    analytics: "Аналитика",
    add: "Добавить",
    upload: "Загрузить",
    empty: "Пока пусто",
  },
  en: {
    appName: "DolomitPulse CRM",
    lang: "Language",
    home: "Home",
    clients: "Clients",
    deals: "Deals",
    docs: "Documents",
    referrals: "Referrals",
    analytics: "Analytics",
    add: "Add",
    upload: "Upload",
    empty: "Empty for now",
  },
  kk: {
    appName: "DolomitPulse CRM",
    lang: "Тіл",
    home: "Басты бет",
    clients: "Клиенттер",
    deals: "Мәмілелер",
    docs: "Құжаттар",
    referrals: "Рефералдар",
    analytics: "Аналитика",
    add: "Қосу",
    upload: "Жүктеу",
    empty: "Әзірше бос",
  },
  ky: {
    appName: "DolomitPulse CRM",
    lang: "Тил",
    home: "Башкы бет",
    clients: "Кардарлар",
    deals: "Бүтүмдөр",
    docs: "Документтер",
    referrals: "Рефералдар",
    analytics: "Аналитика",
    add: "Кошуу",
    upload: "Жүктөө",
    empty: "Азырынча бош",
  },
  zh: {
    appName: "白云石脉冲 CRM",
    lang: "语言",
    home: "主页",
    clients: "客户",
    deals: "交易",
    docs: "文件",
    referrals: "推荐",
    analytics: "分析",
    add: "新增",
    upload: "上传",
    empty: "暂无内容",
  },
};

function getLang() {
  const saved = localStorage.getItem("dp_lang");
  if (saved && I18N[saved]) return saved;
  return "ru";
}
function setLang(code) {
  localStorage.setItem("dp_lang", code);
  render();
}
function t(key) {
  const lang = getLang();
  return (I18N[lang] && I18N[lang][key]) || (I18N.ru && I18N.ru[key]) || key;
}

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => {
    if (k === "class") node.className = v;
    else if (k.startsWith("on") && typeof v === "function") node.addEventListener(k.slice(2), v);
    else node.setAttribute(k, v);
  });
  children.forEach((c) => node.appendChild(typeof c === "string" ? document.createTextNode(c) : c));
  return node;
}

function render() {
  const root = document.getElementById("app");
  if (!root) return;
  root.innerHTML = "";

  const lang = getLang();

  // Top bar
  const title = el("div", { class: "brand" }, [t("appName")]);

  const langSelect = el("select", { class: "lang-select", id: "langSelect" },
    LANGS.map(l => {
      const opt = el("option", { value: l.code }, [l.label]);
      if (l.code === lang) opt.selected = true;
      return opt;
    })
  );
  langSelect.addEventListener("change", (e) => setLang(e.target.value));

  const topRight = el("div", { class: "top-right" }, [
    el("span", { class: "label" }, [t("lang") + ": "]),
    langSelect
  ]);

  const top = el("div", { class: "topbar" }, [title, topRight]);

  // Sidebar
  const menuItems = [
    ["home", t("home")],
    ["clients", t("clients")],
    ["deals", t("deals")],
    ["docs", t("docs")],
    ["referrals", t("referrals")],
    ["analytics", t("analytics")],
  ];

  const active = localStorage.getItem("dp_tab") || "home";

  const nav = el("div", { class: "sidebar" },
    menuItems.map(([key, label]) =>
      el("button", {
        class: "navbtn" + (key === active ? " active" : ""),
        onclick: () => {
          localStorage.setItem("dp_tab", key);
          render();
        }
      }, [label])
    )
  );

  // Content
  const header = el("div", { class: "content-header" }, [
    el("h2", {}, [menuItems.find(m => m[0] === active)?.[1] || ""]),
    el("div", { class: "actions" }, [
      el("button", { class: "btn", onclick: () => alert("Demo: " + t("add")) }, [t("add")]),
      el("button", { class: "btn secondary", onclick: () => alert("Demo: " + t("upload")) }, [t("upload")]),
    ])
  ]);

  const body = el("div", { class: "content-body" }, [
    el("div", { class: "card" }, [
      el("div", { class: "muted" }, [t("empty")]),
    ])
  ]);

  const content = el("div", { class: "content" }, [header, body]);

  const layout = el("div", { class: "layout" }, [nav, content]);

  root.appendChild(top);
  root.appendChild(layout);
}

document.addEventListener("DOMContentLoaded", render);
