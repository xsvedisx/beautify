document.addEventListener("DOMContentLoaded", () => {
  /* one and only Swiper instance */
  const swiper = new Swiper(".mySwiper", {
    // --- visual options you had in the first block ---
    spaceBetween: 30,
    freeMode: false,

    breakpoints: {
      320: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
      1440: { slidesPerView: 4 },
    },

    // --- autoplay you added later ---
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },

    // choose ONE pagination style – fraction *or* bullets
    pagination: {
      el: ".swiper-pagination",
      type: "fraction", // or "bullets"
      clickable: true,
    },
  });
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

document.addEventListener("DOMContentLoaded", () => {
  const accordionButtons = document.querySelectorAll(".accordion-button");

  accordionButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const expanded = btn.getAttribute("aria-expanded") === "true";
      // close any open item if you want "one-open-at-a-time" behaviour
      accordionButtons.forEach((b) => {
        b.setAttribute("aria-expanded", false);
        b.nextElementSibling.style.maxHeight = null;
      });

      // then toggle the clicked one
      btn.setAttribute("aria-expanded", !expanded);
      const panel = btn.nextElementSibling;
      if (!expanded) {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } else {
        panel.style.maxHeight = null;
      }
    });
  });
});
