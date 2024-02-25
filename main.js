const hamburgerMenu = document.getElementById("hamb-menu");
const sidebar = document.getElementById("main-sidebar");


hamburgerMenu.addEventListener("click", () => {
  sidebar.classList.toggle("hidden");
})