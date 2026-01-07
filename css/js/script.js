// Tooggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// Ketika hamburger-menu di klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
};

//toggel class active untuk search form
const searchform = document.queryselector('.search-form');
const searchbox = document.queryselector("#search-box");

document.querySelector('#search-button').onclick = () => {
  searchform.classlist.toggle('active');
  searchbox.focus();
  e.preventdefault();
}

// klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
