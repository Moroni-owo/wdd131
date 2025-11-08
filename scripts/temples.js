// Hamburger menu toggle
const menuButton = document.querySelector("#menu");
const nav = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("show");
  menuButton.textContent = nav.classList.contains("show") ? "✖" : "☰";
});

// Dynamic year and last modified
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;
