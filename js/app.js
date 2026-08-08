(function () {
  // ===== Side menu =====
  const menu = document.getElementById("side-menu");
  const overlay = document.getElementById("menu-overlay");
  const openBtn = document.getElementById("menu-open");
  const closeBtn = document.getElementById("menu-close");
  const links = document.querySelectorAll(".menu-link");
  const pages = document.querySelectorAll(".page-section");

  function openMenu() {
    if (!menu) return;
    menu.classList.add("open");
    if (overlay) overlay.classList.add("visible");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    if (!menu) return;
    menu.classList.remove("open");
    if (overlay) overlay.classList.remove("visible");
    document.body.style.overflow = "";
  }

  if (openBtn) openBtn.addEventListener("click", openMenu);
  if (closeBtn) closeBtn.addEventListener("click", closeMenu);
  if (overlay) overlay.addEventListener("click", closeMenu);

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

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMenu();
      closeLoot();
    }
  });

  // ===== LootLabs download popup =====
  const lootOverlay = document.getElementById("loot-overlay");
  const lootModal = document.getElementById("loot-modal");
  const lootClose = document.getElementById("loot-close");
  const lootContinue = document.getElementById("loot-continue");
  const lootFileLabel = document.getElementById("loot-file-label");

  function openLoot(url, label) {
    if (!lootModal || !lootContinue) return;
    lootContinue.href = url;
    if (lootFileLabel) lootFileLabel.textContent = label || "Selected file";
    lootModal.hidden = false;
    if (lootOverlay) lootOverlay.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeLoot() {
    if (lootModal) lootModal.hidden = true;
    if (lootOverlay) lootOverlay.hidden = true;
    // only clear overflow if menu is also closed
    if (!menu || !menu.classList.contains("open")) {
      document.body.style.overflow = "";
    }
  }

  document.querySelectorAll(".loot-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const url = btn.getAttribute("data-loot");
      const label = btn.getAttribute("data-label") || btn.textContent.trim();
      if (url) openLoot(url, label);
    });
  });

  if (lootClose) lootClose.addEventListener("click", closeLoot);
  if (lootOverlay) lootOverlay.addEventListener("click", closeLoot);
})();
