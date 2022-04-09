$('.testi').slick({
  // dots: true,
  nav: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  // slidesToScroll: 1,
  centerPadding:'465px',
  centerMode: true,
  draggable:true,
  responsive: [
    {
      breakpoint: 1800,
      settings: {
        slidesToShow: 1,
        centerPadding:'400px',
      }
    },
    {
      breakpoint: 1650,
      settings: {
        centerPadding:'300px',
      }
    },
    {
      breakpoint: 1400,
      settings: {
        centerPadding:'50px',
      }
    },
    {
      breakpoint: 800,
      settings: {
        centerPadding:'0px',
        arrows:false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  // animatedClassName: 'aos-animate', // class applied on animation
  // useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  // disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  // debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  // throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 10, // offset (in px) from the original trigger point
  delay: 500, // values from 0 to 3000, with step 50ms
  duration: 1100, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  // once: false, // whether animation should happen only once - while scrolling down
  // mirror: false, // whether elements should animate out while scrolling past them
  // anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

// LOADER 
var preloader = document.getElementById('load_icon');
function load__() {
  preloader.style.display = 'none';
}

// HEADER 
$(window).scroll(function() {     
  var scroll = $(window).scrollTop();
  if (scroll > 0) {
      $("#header").addClass("active");
  }
  else {
      $("#header").removeClass("active");
  }
});