(() => {
  const overlay = document.getElementById("menu-overlay");
  const openers = document.querySelectorAll("[data-menu-open]");
  const closers = document.querySelectorAll("[data-menu-close]");
  if (!overlay) return;

  const setOpen = (open) => {
    overlay.hidden = !open;
    overlay.setAttribute("aria-hidden", open ? "false" : "true");
    document.body.classList.toggle("menu-open", open);
  };

  openers.forEach((el) =>
    el.addEventListener("click", (e) => {
      e.preventDefault();
      setOpen(true);
    })
  );
  closers.forEach((el) =>
    el.addEventListener("click", (e) => {
      e.preventDefault();
      setOpen(false);
    })
  );
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) setOpen(false);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });
})();
