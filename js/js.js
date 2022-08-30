$(document).ready(function() {

  $(".one").hover(function(){
    $('.one_text').removeClass("none");
  });

  $(".two").hover(function(){
    $('.two_text').toggleClass("none");
  });

  $(".three").hover(function(){
    $('.three_text').toggleClass("none");
  });

  $(".four").hover(function(){
    $('.four_text').toggleClass("none");
  });

  $(".five").hover(function(){
    $('.five_text').toggleClass("none");
  });

  $(".six").hover(function(){
    $('.six_text').toggleClass("none");
  });

  $(".seven").hover(function(){
    $('.seven_text').toggleClass("none");
  });

  $(".eight").hover(function(){
    $('.eight_text').toggleClass("none");
  });

  $(".nine").hover(function(){
    $('.nine_text').toggleClass("none");
  });

  $(".works").hover(function(){
    $('.recone').toggleClass("none");
  });

  $(".price").hover(function(){
    $('.rectwo').toggleClass("none");
  });

  $(".about").hover(function(){
    $('.recthree').toggleClass("none");
  });

  $(".replie").hover(function(){
    $('.recfour').toggleClass("none");
  });

  $(".form").hover(function(){
    $('.recfive').toggleClass("none");
  });

  $(".contacts").hover(function(){
    $('.recsix').toggleClass("none");
  });


  // You can also pass an optional settings object
  // below listed default settings
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 100, // offset (in px) from the original trigger point
    delay: 300, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

  });

  });
