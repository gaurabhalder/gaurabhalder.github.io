(() => {
  const root = document.documentElement;
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  // Theme
  const saved = localStorage.getItem("gh-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  root.setAttribute("data-theme", saved || (prefersDark ? "dark" : "light"));

  const themeToggle = document.getElementById("themeToggle");
  themeToggle?.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("gh-theme", next);
  });

  // Search focus with /
  const search = document.getElementById("search");
  window.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement !== search && e.target.tagName !== "INPUT") {
      e.preventDefault();
      search?.focus();
    }
  });

  search?.addEventListener("input", () => {
    const q = search.value.trim().toLowerCase();
    document.querySelectorAll(".repo-card").forEach((card) => {
      const text = card.textContent.toLowerCase();
      card.style.display = !q || text.includes(q) ? "" : "none";
    });
  });

  // Tabs
  const tabs = [...document.querySelectorAll(".tab")];
  const panels = [...document.querySelectorAll(".panel")];

  function activate(id) {
    tabs.forEach((tab) => {
      const on = tab.dataset.panel === id;
      tab.classList.toggle("is-active", on);
      tab.setAttribute("aria-selected", String(on));
    });
    panels.forEach((panel) => {
      const on = panel.id === id;
      panel.classList.toggle("is-active", on);
      panel.hidden = !on;
    });
    history.replaceState(null, "", `#${id}`);
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => activate(tab.dataset.panel));
  });

  const hash = location.hash.replace("#", "");
  if (hash && document.getElementById(hash)) activate(hash);

  // Density radios
  const pinGrid = document.getElementById("pinGrid");
  document.querySelectorAll('input[name="density"]').forEach((input) => {
    input.addEventListener("change", () => {
      if (input.checked && pinGrid) pinGrid.dataset.density = input.value;
    });
  });

  // Radial FAB
  const fab = document.getElementById("radialFab");
  const fabToggle = document.getElementById("fabToggle");
  const fabMenu = document.getElementById("fabMenu");

  function setFab(open) {
    fab?.classList.toggle("is-open", open);
    fabToggle?.setAttribute("aria-expanded", String(open));
    if (fabMenu) fabMenu.hidden = !open;
  }

  fabToggle?.addEventListener("click", () => {
    setFab(!fab?.classList.contains("is-open"));
  });

  fabMenu?.querySelectorAll("[data-jump]").forEach((btn) => {
    btn.addEventListener("click", () => {
      activate(btn.dataset.jump);
      setFab(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  document.addEventListener("click", (e) => {
    if (fab && !fab.contains(e.target)) setFab(false);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setFab(false);
  });
})();
