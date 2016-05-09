$('.slick-slider--3').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
	{ 
	  breakpoint: 769,
	  settings: {
	  slidesToShow: 2,
	  slidesToScroll: 1,
	  arrows: true
	  }
	},
	{ 
	  breakpoint: 601,
	  settings: {
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true
	  }
	},
	{ 
	  breakpoint: 481,
	  settings: {
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true  
	  }   	
   	}
  ]
});

