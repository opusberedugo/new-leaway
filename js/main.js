document.querySelector("nav .brand button").addEventListener("click", (e)=>{
  document.querySelector("nav .options").classList.toggle("active")
  // alert()
})

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    650: {
      items: 1
    },
    768: {
      items: 1.1
    },
    1000: {
      items: 1.001
    },
    1200: {
      items: 1.5
    },
    1300: {
      items: 2
    }
  }
})

$('.owl-carousel#carousel2').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay: true,
  autoplayTimeout: 6000,
  autoplayHoverPause: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    650: {
      items: 1
    },
    768: {
      items: 1.1
    },
    1000: {
      items: 3
    },
    1200: {
      items: 4
    }
  }
})


