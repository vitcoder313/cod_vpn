// accordion
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  item.querySelector(".faq-question").addEventListener("click", () => {
    // Xóa class 'open' khỏi tất cả các item khác
    faqItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("open");
      }
    });
    // Toggle class 'open' cho item hiện tại
    item.classList.toggle("open");
  });
});

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

const updateHeroSectionBackground = () => {
  const currentMonth = new Date().getMonth();
  if (currentMonth === 11) {
    const heroSection = document.querySelector(".hero-section");
    if (heroSection) {
			heroSection.classList.remove('hero-section')
      heroSection.classList.add("hero-section--winter");
    }

    // const gameLeft = document.querySelector(".games-winter-left");
    // if (gameLeft) {
    //   gameLeft.style.display = "block";
    // }

    // const gameRight = document.querySelector(".games-winter-right");
    // if (gameRight) {
    //   gameRight.style.display = "block";
    // }

    const footer = document.querySelector(".footer");
    if (footer) {
      footer.classList.add("footer-winter");
    }

    // const pricingLeft = document.querySelector(".pricing-winter-left");
    // if (pricingLeft) {
    //   pricingLeft.style.display = "block";
    // }

    // const pricingRight = document.querySelector(".pricing-winter-right");
    // if (pricingRight) {
    //   pricingRight.style.display = "block";
    // }

    const faqBg = document.querySelector('.faq-contain');
    if (faqBg) {
      faqBg.classList.add('faq-bg');
    }

    const cardIce = document.querySelector('.card-ice');
    if (cardIce) {
      cardIce.style.display = 'block'
    }
  }
};

document.addEventListener("DOMContentLoaded", updateHeroSectionBackground);


const textElement = document.querySelector('.hero-desc');
const parentElement = textElement.parentElement;

function adjustPosition() {
  const parentWidth = parentElement.offsetWidth;
  if (parentWidth < 1440) {
    textElement.style.left = '';
    return
  }
  const textWidth = textElement.offsetWidth;
  console.log('parentWidth :>> ', parentWidth);
  console.log('textWidth :>> ', textWidth);
  const leftPosition = (parentWidth - 1440) / 2 - 20.5;
  console.log('leftPosition :>> ', leftPosition);
  if (leftPosition <= 60) return
  textElement.style.left = `${leftPosition}px`;
}

adjustPosition();
window.addEventListener('resize', adjustPosition);