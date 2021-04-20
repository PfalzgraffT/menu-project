const menuBurgerBtn = document.querySelector('.burger');

menuBurgerBtn.addEventListener('click', () => {
  document.body.classList.toggle('menu-open');
})


const menuBtns = document.querySelectorAll('.toggle');

//menuBtns.forEach(menuBtn => {
//  menuBtn.addEventListener('click', () => {
//  });
//});


[].forEach.call(menuBtns, function (menuBtn) {
    menuBtn.addEventListener('click', function () {
  document.body.classList.toggle('menu-open');

    });
});


import { loadDynamicBannerText } from './js/type';

document.addEventListener('turbolinks:load', () => {
   loadDynamicBannerText();
});
