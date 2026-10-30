(function () {
  "use strict";

  const key = "cookie_clicker_ui_theme_v2";
  const themes = ["pure-black", "original", "night", "white"];
  const select = document.getElementById("ccThemeSelect");
  if (!select) return;

  function readTheme() {
    try {
      const saved = window.localStorage.getItem(key);
      return themes.includes(saved) ? saved : "night";
    } catch (error) {
      return "night";
    }
  }

  function applyTheme(theme, save) {
    if (!themes.includes(theme)) theme = "night";
    document.body.dataset.cookieTheme = theme;
    select.value = theme;
    if (save) {
      try {
        window.localStorage.setItem(key, theme);
      } catch (error) {
        // Keep the selected theme for this page view if storage is unavailable.
      }
    }
  }

  applyTheme(readTheme(), false);
  select.addEventListener("change", function () {
    applyTheme(select.value, true);
  });
})();
