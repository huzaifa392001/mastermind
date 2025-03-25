$(function () {
    // lenisSetup()
    sliderInit()
    // Fancybox.bind("[data-fancybox]", {
    //     // Your custom options
    // });
})

$(window).on("load", () => {})

function lenisSetup() {
    const lenis = new Lenis({
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
        mouseMultiplier: 1,
    })
    lenis.scrollTo(document.querySelector('#home'))

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf);
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            lenis.scrollTo(this.getAttribute("href"));
        });
    });
}

function sliderInit() {
    var whychooseSilder = new Swiper('.whychooseSilder', {
        loop: true,
        spaceBetween: 30,
        effect: "fade",
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    var testimonial__slider = new Swiper('.testimonial__slider', {
		loop: true,
		slidesPerView: 1,
		spaceBetween: 20,
		breakpoints: {
			1024: {
				slidesPerView: 4,
				spaceBetween: 20
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 20
			},
			640: {
				slidesPerView: 2.5,
				spaceBetween: 10
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 10
			},
			375: {
				slidesPerView: 1.5,
				spaceBetween: 10
			}
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},		
	});
}