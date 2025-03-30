const mobileNavigation = document.querySelector(".mobile-navigation");
const openNavigationBtn = document.querySelector(".open-navigation");
const closeNavigationBtn = document.querySelector(".close-navigation");
const body = document.querySelector("body");

function setupEventListeners() {
  openNavigationBtn.addEventListener("click", openMobileNavigation);
  closeNavigationBtn.addEventListener("click", closeMobileNavigation);
  mobileNavigation.addEventListener("keydown", handleKeyDown);
  mobileNavigation.addEventListener("click", handleDialogClick);
}

function handleDialogClick(e) {
  const dialogDimensions = mobileNavigation.getBoundingClientRect();
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    closeMobileNavigation();
  }
}

/* Cycle on focusable elements in the mobile navigation */
function handleKeyDown(e) {
  if (e.key === "Escape") {
    closeMobileNavigation();
  }

  if (e.key !== "Tab") return;

  const focusableElements = mobileNavigation.querySelectorAll(
    'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
  );
  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];

  if (e.shiftKey) {
    if (document.activeElement === firstFocusable) {
      e.preventDefault();
      lastFocusable.focus();
    }
  } else {
    if (document.activeElement === lastFocusable) {
      e.preventDefault();
      firstFocusable.focus();
    }
  }
}

function openMobileNavigation() {
  mobileNavigation.classList.add("mobile-navigation--open");
  mobileNavigation.showModal();
  body.classList.add("scroll-locked");
  const firstFocusable = mobileNavigation.querySelector(
    "a[href], button:not([disabled])"
  );
  if (firstFocusable) firstFocusable.focus();
}

function closeMobileNavigation() {
  mobileNavigation.close();
  body.classList.remove("scroll-locked");
  mobileNavigation.classList.remove("mobile-navigation--open");
}

function init() {
  setupEventListeners();
}

document.addEventListener("DOMContentLoaded", init);
