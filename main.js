// //hero slide here
// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.querySelectorAll(".mySlides");
//   let dots = document.querySelectorAll(".dot-box .dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }
//   slides[slideIndex - 1].style.display = "block";
//   setTimeout(showSlides, 9000);
// }

const swiper2 = new Swiper(".heroSwiper", {
  pagination: {
    el: ".swiper-pagination",
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
  },
});

//menu toggle here
const menuBtn = document.getElementById("menu-bar");
const closeMenubar = document.getElementById("close-bar");
const mobSidebar = document.querySelector(".mob-sidebar");

function toggleMenu() {
  mobSidebar.classList.toggle("hidden");
  let boolValue = false;
  if (mobSidebar.classList.contains("hidden")) {
    boolValue = boolValue;
    document.getElementsByTagName("body")[0].style.overflow = boolValue ? "hidden" : "";
  } else {
    boolValue = !boolValue;
    document.getElementsByTagName("body")[0].style.overflow = boolValue ? "hidden" : "";
  }
}
menuBtn.addEventListener("click", toggleMenu);
closeMenubar.addEventListener("click", toggleMenu);

//sticky bar
window.addEventListener("scroll", () => {
  const stickyBar = document.querySelector(".sticky-bar");
  const stickyBar2 = document.querySelector("#sticky-bar");

  if (window.scrollY > 0) {
    stickyBar.classList.add("scrolled");
    stickyBar2.style.display = "block";
    stickyBar2.classList.add("scrolled");
  } else {
    stickyBar.classList.remove("scrolled");
    stickyBar2.style.display = "none";
    stickyBar2.classList.remove("scrolled");
  }
})

//toggle for sub menu item
const aeroRights = document.querySelectorAll(".mob-sidebar .fa-chevron-right");
const backAero = document.querySelector(".mob-sidebar .fa-chevron-left");
const mainMenus = document.querySelector(".mob-sidebar .navlinks");

function showSubMenu(step) {
  const el = document.querySelector(`.submenu${step}`);
  console.log(el);

  for (const aeroKey of aeroRights) {
    aeroKey.addEventListener("click", () => {
      el.classList.remove("hidden");
      mainMenus.style.transform = "translate(100%)";
      el.parentElement.style.transform = "translate(10%)";

    });
    backAero.addEventListener("click", () => {
      el.classList.add("hidden");
      el.parentElement.style.transform = "translate(100%)";
      mainMenus.style.transform = "translate(0%)";
    })
  };
}


//slider sub item
let swiper = new Swiper(".mySwiper", {
  slidesPerView: 6,
  centeredSlides: false,
  spaceBetween: 100,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
});

