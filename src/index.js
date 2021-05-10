require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")





import Typed from 'typed.js';


  new Typed('#typed-text-one', {
    strings: ["Mosquée Mohammed Ali"],
    typeSpeed: 200,
    loop: false
  });

  new Typed('#typed-text-onebis', {
    strings: ["La mosquée Mohammed Ali est un sanctuaire islamique. Elle doit sa construction au vice-roi Muhammad Ali Pacha, qui lui a laissé son nom. Cet édifice fut édifié de 1830 à 1848 ; il s'inspire de l'architecture traditionnelle ottomane."],
    typeSpeed: 100,
    loop: true
  });

  new Typed('#typed-text-two', {
    strings: ["La Statue de la Liberté"],
    typeSpeed: 200,
    loop: false
  });
  new Typed('#typed-text-twobis', {
    strings: ["La Statue de la Liberté est une sculpture néo-classique sur Liberty Island. La statue en cuivre a été conçue par le sculpteur français Frédéric Auguste Bartholdi et sa charpente métallique par Gustave Eiffel. Elle est une figure de Libertas, déesse de la liberté romaine."],
    typeSpeed: 100,
    loop: true
  });

  new Typed('#typed-text-three', {
    strings: ["La Tour Eiffel"],
    typeSpeed: 200,
    loop: false
  });
  new Typed('#typed-text-threebis', {
    strings: ["La tour Eiffel est une tour de fer puddlé de 324 mètres de hauteur. Construite en deux ans par Gustave Eiffel et ses collaborateurs, et initialement nommée « Tour de 300 mètres », elle est devenue le symbole de la capitale française et un site touristique de premier plan."],
    typeSpeed: 100,
    loop: true,
  });

  new Typed('#typed-text-four', {
    strings: ["L'Opéra de Sydney"],
    typeSpeed: 200,
    loop: false
  });
  new Typed('#typed-text-fourbis', {
    strings: ["L’opéra de Sydney est l'un des plus célèbres bâtiments du xxe siècle et un haut-lieu de représentation des arts notamment lyriques. Son architecture originale, qui ressemble à un voilier pour les uns, ou à un coquillage pour les autres, a été imaginée par le Danois Jørn Utzon."],
    typeSpeed: 100,
    loop: true
  });

  new Typed('#typed-text-five', {
    strings: ["La Tour de Tokyo"],
    typeSpeed: 200,
    loop: false
  });
  new Typed('#typed-text-fivebis', {
    strings: ["La tour de Tokyo est une tour rouge et blanche située dans l'arrondissement de Minato à Tokyo. Son concept est fondé sur celui de la tour Eiffel de Paris. Elle a été réalisée par l'architecte Tachū Naitō. La tour mesure 332,6 mètres de haut. La construction démarre en 1957 et s'achève en 1958."],
    typeSpeed: 100,
    loop: true
  });






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
