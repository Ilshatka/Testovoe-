document.addEventListener("DOMContentLoaded", () => {

//Фиксация меню при скролле  
  window.addEventListener('scroll', onWindowScroll)
  function onWindowScroll() {
      if(window.document.scrollingElement.scrollTop > 50){
          document.querySelector(".header").classList.add("fixed");
          document.querySelector(".start").classList.add("fixed");
      }
      else { 
          document.querySelector(".header").classList.remove("fixed");
          document.querySelector(".start").classList.remove("fixed");
      }
    }

//Меню бургер
  const burger = document.querySelector(".header__menu-burger");
  const menu = document.querySelector(".header__emerging-menu-panel");

  burger.addEventListener("click", ()=>{
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    document.querySelector("body").classList.toggle("open-menu");
    document.querySelector(".header__mobile-background-bar").classList.toggle("visible");
    document.querySelector(".header").classList.add("fixed");
  })

//Настройка слайдера
  const swiper = new Swiper('.swiper', {
    navigation: {
      nextEl: ".works__slider-button-next",
      prevEl: ".works__slider-button-prev"
    },
    direction: 'horizontal',
    slidesPerView:1,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,  
    },
      breakpoints: {
      767: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    }
  });

});

