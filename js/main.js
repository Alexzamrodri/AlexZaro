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
  //removeClass();
  //console.log(e.target.classList.add("active-link"));
});
//console.log(location.href);
//console.log(document.links.length);
/*function removeClass() {
  const links = document.querySelectorAll(".menu-links a");
  //console.log(links);
  for (let index = 0; index < links.length; index++) {
    if (links[index].matches(".menu .menu-links .active-link ")) {
      links[index].classList.remove("active-link");
    }
  }
}*/

//Identificando
const section = document.querySelectorAll(".observer");
const links = document.querySelectorAll(".menu-links a");

const observer = new IntersectionObserver(
  (entradas, observador) => {
    console.log(entradas);
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        const id = "#" + entrada.target.id;
        history.pushState({}, "", id);

        links.forEach((link) => {
          link.classList.remove("active-link");
          const href = link.attributes.href.nodeValue;
          if (href === id) {
            link.classList.add("active-link");
          }
        });
      }
    });
  },
  {
    //indica que cuando el contenido de la pagina ya este al 50% y al 75% se ponga visible
    threshold: [0.5, 0.75],
  }
);
//console.log(section);
section.forEach((sec) => {
  observer.observe(sec);
});
