/*======================SHOW MENU=====================*/

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*=====================================================*/

/*======= MENU SHOW =======*/
/*Validate if constant exist */

if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}
/*===================== MENU HIDDEN =====================*/

/*Validate if constant exists */

if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*===================== REMOVE MENU MOBILE =====================*/

const navlink = document.querySelectorAll('.nav__link')

function linkAction(){
   const navMenu = document.getElementById('nav-menu')
    //when we click on each nav__link, we remove the show-menu

    navMenu.classList.remove('show-menu')
}

navlink.forEach(n => n.addEventListener('click', linkAction))


/*===================== HOME SWIPER =====================*/

let homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: 'true',
    
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
})
