$('.your-class').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 428,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          dots: false,
          arrows : false,
        }
      }
     
    ]
  });




  const swiper = new Swiper('.swiper-container', {
    loop: true, // Enables infinite loop
    autoplay: {
        delay: 1500, // Auto slide every 4 seconds
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swipers-button-next',
        prevEl: '.swipers-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
