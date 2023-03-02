// Strict Mode Activated
"use strict";

// MOBILE NAVIGATION BAR
const navMenu = document.getElementById("nav-menu");
const openMenu = document.getElementById("toggle-on");
const closeMenu = document.getElementById("toggle-off");
const logo = document.getElementById("site-logo");

openMenu.addEventListener("click", function () {
  navMenu.classList.add("show-menu");
  // logo.style.zIndex = 1;
});

closeMenu.addEventListener("click", function () {
  navMenu.classList.remove("show-menu");
});

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*======= CHANGE BACKGROUND HEADER ===========*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 100) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

// SCROLL TO TOP
let BackTop = document.getElementById("backTop");
// When User Scroll down 20px from top , show button
function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    BackTop.style.bottom = "20px";
  } else {
    BackTop.style.bottom = "-100%";
  }
}
window.onscroll = function () {
  scrollFunction();
};

//when User click,  scroll to the top of the document,
BackTop.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// PORTFOLIO FILTERING
const filterContainer = document.querySelector(".filter-nav"),
  galleryItems = document.querySelectorAll(".image-item");

filterContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("filter-btn")) {
    // deactivate existing active 'filter-item'
    filterContainer.querySelector(".active").classList.remove("active");
    // activate new 'filter-item'
    event.target.classList.add("active");
    const filterValue = event.target.getAttribute("data-filter");
    galleryItems.forEach((item) => {
      if (item.classList.contains(filterValue) || filterValue === "all") {
        item.classList.remove("hide");
        item.classList.add("show");
      } else {
        item.classList.remove("show");
        item.classList.add("hide");
      }
    });
  }
});

const images = document.querySelectorAll("#gallery");
const viewImg = document.querySelectorAll(".img-icon-view");
const lightBox = document.querySelector(".lightbox");
const lightBoxImg = document.querySelector(".lightbox-img");
const lightBoxClose = document.querySelector(".lightbox-close");

viewImg.forEach((viewImg, index) => {
  viewImg.addEventListener("click", function () {
    lightBox.classList.add("lightbox-open");
    console.log(index);
    let newImg = images[index].src;
    console.log(newImg);
    lightBoxImg.src = newImg;
  });
});

lightBoxClose.addEventListener("click", function (e) {
  // e is the pointer event object, the element with the event listerner is a property in the e obj
  // let min = e.target.getAttribute("class");

  lightBox.classList.remove("lightbox-open");
});
