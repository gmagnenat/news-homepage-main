const nav = document.querySelector(".navigation");
const openBtn = document.querySelector(".open-navigation");
const closeBtn = document.querySelector(".close-navigation");
const main = document.querySelector("main");
const backdrop = document.querySelector(".backdrop");
const desktopMediaQuery = window.matchMedia("(min-width: 60rem)");
const body = document.body;

let lastActive = null;

function getTrapFocusables() {
  const navFocusables = nav.querySelectorAll(
    'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
  );
  return [closeBtn, ...navFocusables].filter(Boolean);
}

function onKeyDown(e) {
  if (e.key === "Escape") {
    e.preventDefault();
    closeMenu();
    return;
  }

  if (e.key !== "Tab") return;

  const focusables = getTrapFocusables();
  const first = focusables[0];
  const last = focusables[focusables.length - 1];

  if (!first || !last) return;

  if (e.shiftKey) {
    if (document.activeElement === first) {
      e.preventDefault();
      last.focus();
    }
  } else {
    if (document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
}

function openMenu() {
  main.inert = true;
  lastActive = document.activeElement;
  nav.dataset.open = "true";
  closeBtn.style.display = "block";
  body.classList.add("scroll-locked");
  openBtn.setAttribute("aria-expanded", "true");
  backdrop.hidden = false;
  closeBtn.focus();

  document.addEventListener("keydown", onKeyDown, true);
}

function closeMenu() {
  main.inert = false;
  nav.dataset.open = "false";
  closeBtn.style.display = "";
  body.classList.remove("scroll-locked");
  openBtn.setAttribute("aria-expanded", "false");
  backdrop.hidden = true;
  document.removeEventListener("keydown", onKeyDown, true);
  lastActive?.focus?.();
}

function handleBreakpointChange(e) {
  if (e.matches && nav.dataset.open === "true") {
    closeMenu();
  }
}

backdrop.addEventListener("click", closeMenu);
openBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
desktopMediaQuery.addEventListener("change", handleBreakpointChange);
