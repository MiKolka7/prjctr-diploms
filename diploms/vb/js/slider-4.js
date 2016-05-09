$('.slick-slider--4').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
	{ 
	  breakpoint: 761,
	  settings: {
	  slidesToShow: 2,
	  slidesToScroll: 1,
	  arrows: true
	  }
	},
	{ 
	  breakpoint: 480,
	  settings: {
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true  
	  }   	
   	}
  ]
});

