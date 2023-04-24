'use strict';

/* SLIDER */

new Swiper('.photo-swiper', {
	navigation: {
		nextEl: '.photo-arrow-right',
		prevEl: '.photo-arrow-left'
	},
	pagination: {
		el: '.swiper-bullet',
		clickable: true,
		dynamicBullets: true,
	},
	grabCursor: true,
	
	keyboard:{
		enabled: true,
		onlyInViewport: true,
	},
}); 

new Swiper(".comments-swiper", {
	navigation: {
		nextEl: '.comment-arrow-right',
		prevEl: '.comment-arrow-left'
	},
	pagination: {
		el: '.swiper-bullet',
		clickable: true,
		dynamicBullets: true,
	},
	grabCursor: true,
	autoHeight: false,
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		680: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		1000: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	},
	mousewheel: {
		sensivity: 1,
	},
});


/* SCROLL */

const scrollLinks = document.querySelectorAll('a[data-goto]');

if(scrollLinks.length > 0) {
	scrollLinks.forEach(scrollLink => {
		scrollLink.addEventListener('click', navLinkClick);
	});
	
	function navLinkClick(e) {
		const scrollLink = e.target;
		
	if(scrollLink.dataset.goto && document.querySelector(scrollLink.dataset.goto)){
		const gotoBlock = document.querySelector(scrollLink.dataset.goto);
		const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight;
		
		window.scrollTo({
			top: gotoBlockValue,
			behavior: 'smooth'
		});
		e.preventDefault();
	}
	}
}

/* BURGER ANIMATION */

const burger = document.querySelector('.burger__inner');
const navBurger = document.querySelector(".burger__nav")

burger.addEventListener('click', function(){
	burger.classList.toggle('active');
	navBurger.classList.toggle('visible')
});

