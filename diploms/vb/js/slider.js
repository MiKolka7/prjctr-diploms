$('.slick-slider').slick({
  dots: true,
  infinite: true,
  slidesToShow: 3.5,
  slidesToScroll: 1,
  autoplay: true,
  playSpeed: 1000,
  responsive: [
    {
	  breakpoint: 961,
	  settings: {
	  dots: true,
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  autoplay: true,
	  playSpeed: 1000
	  }
	},
	{ 
	  breakpoint: 767,
	  settings: {
	  dots: true,
	  infinite: true,
	  slidesToShow: 2,
	  slidesToScroll: 1,
	  autoplay: true,
	  playSpeed: 1000
	  }
	},
	{ 
	  breakpoint: 601,
	  settings: {
	  dots: true,
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  autoplay: true,
	  playSpeed: 1000
	  }
	},
	{ 
	  breakpoint: 481,
	  settings: {
	  dots: true,
	  infinite: true,
	  slidesToShow: 2,
	  slidesToScroll: 1,
	  autoplay: true,
	  playSpeed: 1000
	  }   	
   	}
  ]
});

