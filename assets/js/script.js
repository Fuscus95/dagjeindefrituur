const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");

const closeNav = () => {
  mainNav?.classList.remove("open");
  navToggle?.setAttribute("aria-expanded", "false");
  navToggle?.setAttribute("aria-label", "Menu openen");
};

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Menu sluiten" : "Menu openen");
  });
}

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", closeNav);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && mainNav?.classList.contains("open")) {
    closeNav();
    navToggle?.focus();
  }
});

document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});
