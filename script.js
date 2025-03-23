var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30, // Space between slides
  freeMode: false,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    clickable: true,
  },
  breakpoints: {
    320: {
      // Small screens (phones)
      slidesPerView: 1,
    },
    768: {
      // Tablets
      slidesPerView: 2,
    },
    1024: {
      // Laptops and desktops
      slidesPerView: 3,
    },
    1440: {
      // Larger screens
      slidesPerView: 4,
    },
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobileNav");

  hamburger.addEventListener("click", function () {
    this.classList.toggle("active");
    mobileNav.classList.toggle("active");
  });
});
