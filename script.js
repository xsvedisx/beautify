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
    this.classList.toggle("active"); // Toggle the active state on the hamburger
    mobileNav.classList.toggle("active"); // Toggle the active state on the mobileNav
  });
});

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navigationContainer");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

document
  .getElementById("visaKonsultation")
  .addEventListener("click", function () {
    var content = document.getElementById("merKonsultation");
    if (content.style.display === "none") {
      content.style.display = "block"; // Show the content
    } else {
      content.style.display = "none"; // Hide the content
    }
  });
