$('.trans-carousel').slick({
	arrows: false,
	dots: true,
	dotsClass: 'slick-dots',
	infinite: true,
	slidesToShow: 2,
	slidesToScroll: 2,
	autoplay: true,
	autoplaySpeed: 2000,
	mobileFirst: true,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 2,
				infinite: true,
				autoplay: true,
				autoplaySpeed: 2000,
			},
		},
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	],
});
