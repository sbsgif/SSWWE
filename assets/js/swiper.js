
  var hero_swiper = new Swiper(".hero-swiper", {
    spaceBetween: 0,
    effect: "slide",
    loop: true,
    
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var info_swiper = new Swiper(".info_swiper", {
    spaceBetween: 0,
    centeredSlides: true,
    effect: "fade",
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  

 
  var swiper = new Swiper(".topics", {
    slidesPerView: 3,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,                         //loop
        autoplay: {                         //autoplay
            delay: 3000,  
        },
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  navigation: {                       //navigation(arrows)
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 2,
        },
    },
  });

  var swiper = new Swiper(".prices", {
    slidesPerView: 3,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,                         //loop
        autoplay: {                         //autoplay
            delay: 3000,  
        },
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  navigation: {                       //navigation(arrows)
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 2,
        },
    },
  });

  var swiper = new Swiper(".why", {
    slidesPerView: 2,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,                         //loop
        autoplay: {                         //autoplay
            delay: 3000,  
        },
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  navigation: {                       //navigation(arrows)
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 2,
        },
    },
  });


  var swiper = new Swiper(".speakers", {
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,                         //loop
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  navigation: {                       //navigation(arrows)
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 2,
        },

    },
  });