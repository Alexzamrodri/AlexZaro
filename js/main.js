//aplicando efecto sticky
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 0);
  //console.log(window.scrollY);
});

//aplicando el modo nocturno
const modeToogle = document.querySelector(".dark-light");
const body = document.querySelector("body");
modeToogle.addEventListener("click", () => {
  modeToogle.classList.toggle("active");
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    localStorage.setItem("dark-mode", "true");
  } else {
    localStorage.setItem("dark-mode", "false");
  }
});
//recuperando informacion del estado de la pagina para la aplicacion del modo nocturno
if (localStorage.getItem("dark-mode") === "true") {
  modeToogle.classList.add("active");
  body.classList.add("dark");
} else {
  modeToogle.classList.remove("active");
  body.classList.remove("dark");
}
/*******MENU MOVILE*********/
const btnOpen = document.querySelector(".siderbarOpen");
const menuBar = document.querySelector(".menu");

btnOpen.addEventListener("click", () => {
  menuBar.classList.add("menu-active");
});

//btnClose
const btnClose = document.querySelector(".siderbarClose");
btnClose.addEventListener("click", () => {
  menuBar.classList.remove("menu-active");
});

document.addEventListener("click", (e) => {
  if (!e.target.matches(".menu a")) return false;
  menuBar.classList.remove("menu-active");
});
