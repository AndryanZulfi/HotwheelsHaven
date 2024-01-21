const sidebar = document.querySelector(".navbar .navbar-nav");
const menu = document.querySelector("#hamburger-menu");

menu.addEventListener("click", function (e) {
  event.preventDefault();
  sidebar.classList.toggle("active");
});

// menghilangkan nsidebar
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !sidebar.contains(e.target)) {
    sidebar.classList.remove("active");
  }
});
