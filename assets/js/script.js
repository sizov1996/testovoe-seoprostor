$(document).ready(function(){
    $('.single-item').slick({
        slidesToShow: 1,
        centerMode: true,
        autoplay: false,
        autoplaySpeed: 3000,
        speed: 1300,
        centerPadding: '0px',
        prevArrow: "<img src='./assets/img/prevArrow.svg' class='prev' alt='prev'>",
        nextArrow: "<img src='./assets/img/nextArrow.svg' class='next' alt='next'>",
        dots: true,
        customPaging : function(slider, i) {
        var thumb = $(slider.$slides[i]).data();
        return '<a>'+(i+1)+'</a>';
        },
        responsive: [
        {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    });
    $('.modal-popup').click(function(event){
        $('.popup-zamer').addClass('active');
        event.preventDefault();
    });
    $('.modal__close').click(function(event){
        $('.modal-window').removeClass('active');
        event.preventDefault();
    });
    $('.site-header__icon-burger').click(function(e){
        $(".mobile-menu").fadeIn(500);
        e.preventDefault();
    });
    $('.close-menu').click(function(event){
        $('.mobile-menu').fadeOut('500');
        event.preventDefault();
    });
    $('form').submit(function(event){
        $('.modal-success').addClass('active');
        event.preventDefault();
    });
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.slider-nav'
      });
     
      $('.slider-nav').slick({
        arrows: false,
        slidesToShow: 10,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        focusOnSelect: true,
        vertical:true
      });

});