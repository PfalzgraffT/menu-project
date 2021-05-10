require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")





import { typType } from './js/type';





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


document.addEventListener('turbolinks:load', () => {
  // Call your functions here, e.g:
  typType();
});
