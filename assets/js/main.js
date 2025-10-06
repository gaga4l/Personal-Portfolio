/*=============== HOME SPLIT TEXT ===============*/
const { animate, text, stagger } = anime;

const { chars: chars1 } = text.split('.home-profession-1', {
  chars: true
});
const { chars: chars2 } = text.split('.home-profession-2', {
  chars: true
});

animate(chars1, {
  y: [
    { to: ['100%', '0%'] },
    { to: '-100%', delay: 4000, ease: 'in(3)' }
  ],
  duration: 900,
  ease: 'out(3)',
  delay: stagger(80),
  loop: true,
});

animate(chars2, {
  y: [
    { to: ['100%', '0%'] },
    { to: '-100%', delay: 4000, ease: 'in(3)' }
  ],
  duration: 900,
  ease: 'out(3)',
  delay: stagger(80),
  loop: true,
});
/*=============== SWIPER PROJECTS ===============*/
const swiperProjects = new Swiper(".project-info", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 24,
  grabCursor: true,
  speed: 600,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

/*=============== WORK TABS ===============*/
const workBtn = document.querySelectorAll("[data-target]");

workBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const id = e.target.dataset.target;

    document.querySelectorAll(`[data-content]`).forEach((el) => {
      el.classList.remove("work-active");
    });
    workBtn.forEach((btn) => {
      btn.classList.remove("work-active");
    });

    btn.classList.add("work-active");
    document.querySelectorAll(`#${id}`).forEach((el) => {
      el.classList.add("work-active");
    });
  });
});
/*=============== SERVICES ACCORDION ===============*/
const serviceBtn = document.querySelectorAll(".service-button");

serviceBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const serviceCard = document.querySelectorAll(".service-card"),
      currentCard = btn.parentNode,
      currentInfo = currentCard.querySelector(".service-info"),
      isCardOpen = currentCard.classList.contains("service-open");

    serviceCard.forEach((card) => {
      card.classList.replace("service-open", "service-close");

      const info = card.querySelector(".service-info");
      info.style.height = "0";
    });

    if (!isCardOpen) {
      currentCard.classList.replace("service-close", "service-open");
      currentInfo.style.height = currentInfo.scrollHeight + "px";
    }
  });
});

// serviceBtn.forEach(btn => {
//   btn.addEventListener("click", (e) => {
//     const parent = btn.parentNode
//     if (parent.classList.contains("service-open")){
//       parent.classList.remove("service-open")
//       parent.classList.add("service-close")
//     } else {
//       document.querySelectorAll(".service-card").forEach(el => {
//         if(el.classList.contains("service-open")){
//           el.classList.remove("service-open")
//           el.classList.add("service-close")
//         }
//       })
//       parent.classList.remove("service-close")
//       parent.classList.add("service-open")
//     }
//   })
// })
/*=============== TESTIMONIALS OF DUPLICATE CARDS ===============*/
const tracks = document.querySelectorAll(".testmonial-content");

tracks.forEach((track) => {
  const cards = [...track.children];
  for (const card of cards) {
    track.appendChild(card.cloneNode(true));
  }
});
/*=============== COPY EMAIL IN CONTACT ===============*/
const copyBtn = document.getElementById("contact-button"),
  copiedEmail = document.getElementById("contact-email").textContent;

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(copiedEmail).then(() => {
    copyBtn.innerHTML = 'Email copied <i class="ri-check-line"></i>';

    setTimeout(() => {
      copyBtn.innerHTML = 'Copy email <i class="ri-file-copy-2-line"></i>';
    }, 2000);
  });
});
/*=============== CURRENT YEAR OF THE FOOTER ===============*/
const textYear = document.getElementById("footer-year"),
  currentYear = new Date().getFullYear();

// update the year to current year
textYear.innerHTML = `&#169; ${currentYear}`;
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.scrollY;

  sections.forEach((section) => {
    const id = section.id,
      top = section.offsetTop - 50,
      height = section.offsetHeight,
      link = document.querySelector(".nav-links a[href*=" + id + "]");

    if (!link) return;

    link.classList.toggle(
      "active-link",
      scrollY > top && scrollY <= top + height
    );
  });
};
window.addEventListener("scroll", scrollActive);
/*=============== CUSTOM CURSOR ===============*/
const cursor = document.querySelector(".cursor");
let mouseX = 0,
  mouseY = 0;

const cursorMove = () => {
  // position the cursor
  cursor.style.left = `${mouseX}px`;
  cursor.style.top = `${mouseY}px`;
  cursor.style.transform = `translate(-50%, -50%)`;

  // Update the cursor animation
  requestAnimationFrame(cursorMove);
};

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursorMove();
});


/* Hide custom cursor on links */
const a = document.querySelectorAll("a")

a.forEach(element => {
  element.addEventListener("mouseover", () => {
    cursor.classList.add("hide-cursor")
  })
  element.addEventListener("mouseleave", () => {
    cursor.classList.remove("hide-cursor")
  })
});
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 300,
  reset: true,
})

sr.reveal(".home-image, work-container, .project-container, .work-container, .testmonial-container, .contact-container")
sr.reveal(".home-data", {delay: 900, origin: "bottom"})
sr.reveal(".home-info", {delay: 1200, origin: "bottom"})
sr.reveal(".home-social, .home-cv", {delay: 1500})
sr.reveal(".about-data", {origin: "left"})
sr.reveal(".about-image", {origin: "right"})  
sr.reveal(".service-card", {interval: 100})  
