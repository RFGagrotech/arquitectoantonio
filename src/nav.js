// src/nav.js
export function initNav() {
  const header = document.querySelector(".site-header");
  const btn = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#primary-nav");

  if (!header || !btn || !nav) return;

  function closeMenu() {
    header.classList.remove("is-open");
    btn.setAttribute("aria-expanded", "false");
  }

  btn.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", String(isOpen));
  });

  document.addEventListener("click", (e) => {
    if (!header.contains(e.target)) closeMenu();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  nav.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (a && a.getAttribute("href")?.startsWith("#")) closeMenu();
  });
}
