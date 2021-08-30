//alert('Hello Gulp!');

function fontsStyle(params) {

  let file_content = fs.readFileSync(source_folder + '/scss/fonts.scss');
  if (file_content == '') {
    fs.writeFile(source_folder + '/scss/fonts.scss', '', cb);
    return fs.readdir(path.build.fonts, function (err, items) {
      if (items) {
        let c_fontname;
        for (var i = 0; i < items.length; i++) {
          let fontname = items[i].split('.');
          fontname = fontname[0];
          if (c_fontname != fontname) {
            fs.appendFile(source_folder + '/scss/fonts.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
          }
          c_fontname = fontname;
        }
      }
    })
  }
}

function cb() { }
function testWebP(callback) {

  var webP = new Image();
  webP.onload = webP.onerror = function () {
  callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }
  
  testWebP(function (support) {
  
  if (support == true) {
  document.querySelector('body').classList.add('webp');
  }else{
  document.querySelector('body').classList.add('no-webp');
  }
});
 
// === Swiper slider x2 === 
window.addEventListener('load', () => {

  // -- header-slider --
  const swiperHeader = new Swiper('.header-slider', {
  // Optional parameters
  //direction: 'horizontal',
  effect: "fade",
  loop: true,
  keyboardControl: true,
  grabCursor: true,
  
  slidesPerView: 1,       //!decrise if slides jump one on another
  
  // Navigation arrows
  navigation: {
    nextEl: '.header-slide__btn-right ',
    prevEl: '.header-slide__btn-left ',
  },
  });


  const swiperExample = new Swiper('.example-container', {
    loop: true,
    keyboardControl: true,
    grabCursor: true,
    
    slidesPerView: 1,       //!decrise if slides jump one on another
    spaceBetween: 20,
    breakpoints: {
      1200: {
        slidesPerView: 3,
        // spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        // spaceBetween: 20,
      },
    },
    
    // Navigation arrows
    navigation: {
      nextEl: '.main-slide__btn-right ',
      prevEl: '.main-slide__btn-left ',
    },
    });
  // init swiper here
}, false);



// add link to index.html
// src="https://unpkg.com/swiper/swiper-bundle.min.js"

// === / Swiper slider === 

// === Hamburger ===
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');

let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    menu.classList.add('active');
    body.classList.add('noscroll');
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    menu.classList.remove('active');
    body.classList.remove('noscroll');
  }
});
// === / Hamburger ===


/* 
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.header-menu');

let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    menu.classList.add('open');
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    menu.classList.remove('open');
  }
});
*/

console.log("Use this: npm i --save-dev gulp-uglify-es");

