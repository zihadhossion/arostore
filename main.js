//carousel for hero section
$('.hero').ready(function () {
  $('.hero-container').slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2500,
  });
});

//shop-category slider
$('.shop-category').ready(function () {
  $('.slide-container').slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });
});

//search bar active
const modal = document.querySelector("#myModal");
const closeModal = document.querySelector("#myModal .close");
const btn = document.querySelector("#myBtn");
btn.addEventListener("click", () => {
  modal.classList.add("show-modal")
})

closeModal.addEventListener("click", () => {
  modal.classList.remove("show-modal");
})


//mobile menu bar toggle 
const menuBtn = document.getElementById("menu-bar");
const closeMenubar = document.getElementById("close-bar");
const mobSidebar = document.querySelector(".mob-sidebar");

function toggleMenu() {
  mobSidebar.classList.add("hidden");
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

closeMenubar.addEventListener("click", () => {
  mobSidebar.classList.remove("hidden");
});

//sticky bar for window scroll
window.addEventListener("scroll", () => {
  const stickyBar2 = document.querySelector("#sticky-bar");

  if (window.scrollY > 100) {
    stickyBar2.style.display = "block";
    stickyBar2.classList.add("scrolled");
  } else {
    stickyBar2.style.display = "none";
    stickyBar2.classList.remove("scrolled");
  }
})

//toggle for sub menu item
const backAero = document.querySelector(".mob-sidebar .fa-chevron-left");
const mainMenu = document.querySelector(".mob-sidebar .navlinks");

function showSubMenu(step) {
  const ele = document.querySelector(`.submenu${step}`);

  ele.classList.add("subShow");
  mainMenu.style.transform = "translate(100%)";
  ele.parentElement.style.transform = "translate(10%)";

  backAero.addEventListener("click", () => {
    ele.classList.remove("subShow");
    ele.parentElement.style.transform = "translate(100%)";
    mainMenu.style.transform = "translate(0%)";
  })
}

//browse category
const browseMenu = document.querySelector(".browse");
const browseCate = document.querySelector(".browse-category");

browseMenu.addEventListener("click", () => {
  browseCate.classList.toggle("tBrow")
})

