const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}


/* Delay på fotter menu */

document.addEventListener("DOMContentLoaded", function() {
  var projectsMenu = document.getElementById("projects");
  var dropdownMenu = projectsMenu.querySelector(".dropdown");

  var timeout;

  projectsMenu.addEventListener("mouseenter", function() {
      clearTimeout(timeout);
      dropdownMenu.style.display = "block";
  });

  projectsMenu.addEventListener("mouseleave", function() {
      timeout = setTimeout(function() {
          dropdownMenu.style.display = "none";
      }, 500); // Delay of 500ms
  });

  dropdownMenu.addEventListener("mouseenter", function() {
      clearTimeout(timeout);
  });

  dropdownMenu.addEventListener("mouseleave", function() {
      timeout = setTimeout(function() {
          dropdownMenu.style.display = "none";
      }, 500); // Delay of 500ms
  });
});