$('.slick-slider--2').slick({
  slidesToShow: 6,
  slidesToScroll: 3,
  arrows: true,
  responsive: [
	{ 
	  breakpoint: 769,
	  settings: {
	  slidesToShow: 5,
	  slidesToScroll: 3,
	  arrows: true
	  }
	},
	{ 
	  breakpoint: 601,
	  settings: {
	  slidesToShow: 4,
	  slidesToScroll: 2,
	  arrows: true
	  }
	},
	{ 
	  breakpoint: 481,
	  settings: {
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  arrows: true  
	  }   	
   	}
  ]
});

