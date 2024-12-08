// accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
	item.querySelector('.faq-question').addEventListener('click', () => {
		// Xóa class 'open' khỏi tất cả các item khác
		faqItems.forEach((otherItem) => {
			if (otherItem !== item) {
				otherItem.classList.remove('open');
			}
		});
		// Toggle class 'open' cho item hiện tại
		item.classList.toggle('open');
	});
});

function myFunction() {
	var x = document.getElementById('myLinks');
	if (x.style.display === 'block') {
		x.style.display = 'none';
	} else {
		x.style.display = 'block';
	}
}

const updateHeroSectionBackground = () => {
	const currentMonth = new Date().getMonth();
	if (currentMonth === 11) {
		const heroSection = document.querySelector('.hero-section');
		if (heroSection) {
			heroSection.classList.add('hero-section--winter')
		// 	heroSection.style.background = `
    //   linear-gradient(89.92deg, rgba(0, 0, 0, 0.9) 18.8%, rgba(0, 0, 0, 0) 99.94%),
    //   linear-gradient(180deg, rgba(0, 0, 0, 0.7) 2.72%, rgba(0, 0, 0, 0) 35.89%, rgba(0, 0, 0, 0.53) 100%),
    //   url(assets/images/Snow.png),
    //   url(assets/images/cod_vpn_gaming_promotion.jpeg)
    // `;
		// 	heroSection.style.backgroundSize = 'cover, contain, cover, cover';
		// 	heroSection.style.backgroundPosition =
		// 		'64% center, top left, 64% center, center';
		// 	heroSection.style.backgroundRepeat =
		// 		'no-repeat, no-repeat, no-repeat, no-repeat';
		}

		const gameLeft = document.querySelector('.games-winter-left');
		if (gameLeft) {
			gameLeft.style.display = 'block';
		}

		const gameRight = document.querySelector('.games-winter-right');
		if (gameRight) {
			gameRight.style.display = 'block';
		}

		const footer = document.querySelector('.footer');
		if (footer) {
			footer.classList.add('footer-winter');
		}

		const pricingLeft = document.querySelector('.pricing-winter-left');
		if (pricingLeft) {
			pricingLeft.style.display = 'block';
		}

		const pricingRight = document.querySelector('.pricing-winter-right');
		if (pricingRight) {
			pricingRight.style.display = 'block';
		}
	}
};

document.addEventListener('DOMContentLoaded', updateHeroSectionBackground);
