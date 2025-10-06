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
const serviceBtn = document.querySelectorAll(".service-button")

serviceBtn.forEach(btn => {
    btn.addEventListener("click", () => {
    const serviceCard = document.querySelectorAll(".service-card"),
          currentCard = btn.parentNode,
          currentInfo = currentCard.querySelector(".service-info"),
          isCardOpen = currentCard.classList.contains("service-open")

    serviceCard.forEach(card => {
      card.classList.replace("service-open", "service-close")

      const info = card.querySelector(".service-info")
            info.style.height = "0"
    })

    if (!isCardOpen){
      currentCard.classList.replace("service-close", "service-open")
      currentInfo.style.height = currentInfo.scrollHeight + "px"
    }
  })
})


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
const tracks = document.querySelectorAll(".testmonial-content")

tracks.forEach(track => {
  const cards = [...track.children]
  for (const card of cards){
    track.appendChild(card.cloneNode(true))
  }

  
})
/*=============== COPY EMAIL IN CONTACT ===============*/

/*=============== CURRENT YEAR OF THE FOOTER ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== CUSTOM CURSOR ===============*/

/* Hide custom cursor on links */

/*=============== SCROLL REVEAL ANIMATION ===============*/
