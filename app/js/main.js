$(function () {
$('.products__slider').slick({
    prevArrow: '<button class="slider-btn slider-btn__left"><svg width="12" height="20" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17"/></svg></button>',
    nextArrow: '<button class="slider-btn slider-btn__right"><svg width="12" height="20" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.78161 17L9 9L0.78161 1"/></svg></button>',
    infinite:false,


})


const slider = document.querySelector('.products__slider')
console.log(`slider`, slider);
})

// const header = document.querySelector('.header')
// window.addEventListener('scroll', () => {
//     header.style.marginTop = '30px'
// })
// $(window).scroll(function(){
//     var div = $('body > .header');
//     var top = $(this).scrollTop();
//     if (top > 0) {
//         div.addClass('small');
//     } else {
//         div.removeClass('small');
//     }
// });