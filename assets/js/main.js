/*=============== HOME SPLIT TEXT ===============*/

/*=============== SWIPER PROJECTS ===============*/
const swiperProjects = new Swiper(".project-info", {
  loop: true,
  slidesPerView: 'auto',
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
const workBtn = document.querySelectorAll("[data-target]")

workBtn.forEach(btn => {
  btn.addEventListener("click", (e) => {
    const id = e.target.dataset.target
    
    document.querySelectorAll(`[data-content]`).forEach(el => {
      el.classList.remove("work-active")
    })
    workBtn.forEach(btn => {
      btn.classList.remove("work-active")
    })

    btn.classList.add("work-active")
    document.querySelectorAll(`#${id}`).forEach(el => {
      el.classList.add("work-active")
    })
  })
})
/*=============== SERVICES ACCORDION ===============*/

/*=============== TESTIMONIALS OF DUPLICATE CARDS ===============*/

/*=============== COPY EMAIL IN CONTACT ===============*/

/*=============== CURRENT YEAR OF THE FOOTER ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== CUSTOM CURSOR ===============*/

/* Hide custom cursor on links */

/*=============== SCROLL REVEAL ANIMATION ===============*/
