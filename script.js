document.addEventListener("DOMContentLoaded", function () {
	const header = document.querySelector("header");

	// Menangani peristiwa scroll
	window.addEventListener("scroll", function () {
		if (window.scrollY > 50) {
			// Ganti dengan nilai jarak scroll yang diinginkan
			header.classList.add("scrolled");
		} else {
			header.classList.remove("scrolled");
		}
	});
});

$(document).ready(function () {
	$(".customer-logos").slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1500,
		arrows: false,
		dots: false,
		pauseOnHover: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 520,
				settings: {
					slidesToShow: 3,
				},
			},
		],
	});
});
