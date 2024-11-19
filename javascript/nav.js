const menuButton = document.querySelector(".menu");
const slideMenu = document.querySelector(".slide-menu");
const closeButton = document.querySelector(".close");

menuButton.addEventListener("click", () => {
  slideMenu.style.right = "0px";
});
