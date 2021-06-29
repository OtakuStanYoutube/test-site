let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  if (!hamburger.classList.contains("active")) {
    hamburger.classList.add("active");
    navMenu.classList.add("active");
  } else {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
});
