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

const cart = document.querySelector("#cart");
const search = document.querySelector("#search");
const btn = document.querySelector("form .btn");

cart.addEventListener("click", function () {
  alert("fitur ini akan segera datang");
});

search.addEventListener("click", function () {
  alert("fitur ini akan segera datang");
});

btn.addEventListener("click", function () {
  alert("Maaf saat ini anda belum bisa mengirim pesan");
});
