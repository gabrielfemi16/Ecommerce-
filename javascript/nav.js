const menuButton = document.querySelector(".menu");
const slideMenu = document.querySelector(".slide-menu");
const closeButton = document.querySelector(".close");

menuButton.addEventListener("click", () => {
  slideMenu.style.right = "0px";
  closeButton.style.right = "-150px"; 
});

closeButton.addEventListener("click", () => {
  slideMenu.style.right = "-350px";  
  closeButton.style.right = "300px";  
});

