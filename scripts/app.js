const mobileNavigation = document.querySelector(".mobile-navigation");
const openNavigationBtn = document.querySelector(".open-navigation");
const closeNavigationBtn = document.querySelector(".close-navigation");
const body = document.querySelector("body");

function setupEventListeners() {
  openNavigationBtn?.addEventListener("click", openMobileNavigation);
  closeNavigationBtn?.addEventListener("click", closeMobileNavigation);
  mobileNavigation?.addEventListener("keydown", handleKeyDown);
  mobileNavigation?.addEventListener("click", handleDialogClick);
}

function handleDialogClick(e) {
  if (mobileNavigation && mobileNavigation instanceof HTMLDialogElement) {
    const dialogDimensions = mobileNavigation.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      closeMobileNavigation();
    }
  } else {
    console.error("Mobile navigation is missing or invalid");
  }
}

/* Cycle on focusable elements in the mobile navigation */
function handleKeyDown(e) {
  if (mobileNavigation && mobileNavigation instanceof HTMLElement) {
    if (e.key === "Escape") {
      closeMobileNavigation();
    }

    if (e.key !== "Tab") return;

    const focusableElements = mobileNavigation.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
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
  } else {
    console.error("Mobile navigation is missing or invalid");
  }
}

function openMobileNavigation() {
  if (mobileNavigation && mobileNavigation instanceof HTMLDialogElement) {
    mobileNavigation.classList.add("mobile-navigation--open");
    mobileNavigation.showModal();
    body.classList.add("scroll-locked");
    const firstFocusable = mobileNavigation.querySelector(
      "a[href], button:not([disabled])",
    );
    if (firstFocusable) firstFocusable.focus();
  } else {
    console.error("Mobile navigation is missing or invalid");
  }
}

function closeMobileNavigation() {
  if (mobileNavigation && mobileNavigation instanceof HTMLDialogElement) {
    mobileNavigation.close();
    body.classList.remove("scroll-locked");
    mobileNavigation.classList.remove("mobile-navigation--open");
  } else {
    console.error("Mobile navigation is missing or invalid");
  }
}

function init() {
  setupEventListeners();
}

document.addEventListener("DOMContentLoaded", init);
