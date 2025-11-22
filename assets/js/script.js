"use strict"; // Enforces strict mode, which helps catch common coding mistakes

/**
 * MOBILE NAVBAR TOGGLE
 * This section handles the opening and closing of the mobile navigation menu.
 */

const navbar = document.querySelector("[data-navbar]");
// Selects the navbar element that has the attribute data-navbar

const navToggler = document.querySelector("[data-nav-toggler]");
// Selects the button that toggles the navbar, identified by data-nav-toggler

navToggler.addEventListener("click", function () {
  // Adds a click event listener to the navbar toggle button

  navbar.classList.toggle("active");
  // Toggles the "active" class on the navbar, showing or hiding it

  this.classList.toggle("active");
  // Toggles the "active" class on the toggle button itself for animation or styling
});
