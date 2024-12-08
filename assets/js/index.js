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

    const gameLeft = document.querySelector(".games-winter-left");
    if (gameLeft) {
      gameLeft.style.display = "block";
    }

    const gameRight = document.querySelector(".games-winter-right");
    if (gameRight) {
      gameRight.style.display = "block";
    }

    const footer = document.querySelector(".footer");
    if (footer) {
      footer.classList.add("footer-winter");
    }

    const pricingLeft = document.querySelector(".pricing-winter-left");
    if (pricingLeft) {
      pricingLeft.style.display = "block";
    }

    const pricingRight = document.querySelector(".pricing-winter-right");
    if (pricingRight) {
      pricingRight.style.display = "block";
    }
  }
};

document.addEventListener("DOMContentLoaded", updateHeroSectionBackground);
