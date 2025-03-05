document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger-menu");
  const navbarNav = document.querySelector(".navbar .navbar-nav");

  hamburger.addEventListener("click", function () {
    navbarNav.classList.toggle("active");
  });
});

// Menghilangkan nav 

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector("#hamburger-menu");
  const navbarNav = document.querySelector(".navbar-nav"); // Pastikan selector sesuai dengan elemen navbar

  document.addEventListener("click", function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove("active");
    }
  });
});
