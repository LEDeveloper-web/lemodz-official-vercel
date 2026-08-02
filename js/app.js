(function () {
  const menu = document.getElementById("side-menu");
  const overlay = document.getElementById("menu-overlay");
  const openBtn = document.getElementById("menu-open");
  const closeBtn = document.getElementById("menu-close");
  const links = document.querySelectorAll(".menu-link");
  const pages = document.querySelectorAll(".page-section");

  function openMenu() {
    menu.classList.add("open");
    overlay.classList.add("visible");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    menu.classList.remove("open");
    overlay.classList.remove("visible");
    document.body.style.overflow = "";
  }

  openBtn.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const page = link.getAttribute("data-page");

      links.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");

      pages.forEach((p) => p.classList.remove("active"));
      const target = document.getElementById("page-" + page);
      if (target) target.classList.add("active");

      closeMenu();
    });
  });

  // Escape key closes menu
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
})();
