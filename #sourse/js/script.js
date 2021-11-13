// IBG =============================================================
jQuery('.ibg').each(function () {
	var src = jQuery(this).find('img').attr('src');
	jQuery(this).css('background', 'url(' + src + ') center / cover no-repeat');
	jQuery(this).find('img').css('display', 'none');
});

//menu burger
const burger = document.querySelector('.menu_burger');
const headerBurger = document.querySelector('.header_menu')
burger.addEventListener('click', function () {
	this.classList.toggle('active');
	headerBurger.classList.toggle('active');
	document.body.classList.toggle('lock')
});

//header
const header = document.querySelector('.header');

window.addEventListener('scroll', function () {
	if (document.documentElement.scrollTop > 50) {
		header.classList.add('active');
	} else {
		header.classList.remove('active')
	}
})

//slider
new Swiper('.blog_items', {
	slidesPerView: 1,
	loop: true,
	autoplay: {
		delay: 5000,
	},
	spaceBetween: 22,
	initialSlide: 0,
	breakpoints: {
		800: {
			slidesPerView: 2,
		}
	}
})


