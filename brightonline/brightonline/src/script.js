// Animate service cards on scroll
const serviceCards = document.querySelectorAll('.service-card');

function checkServicesInView() {
  const triggerBottom = window.innerHeight * 0.85;

  serviceCards.forEach((card, index) => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
      setTimeout(() => {
        card.classList.add('visible');
      }, index * 150); // stagger delay 150ms between cards
    } else {
      card.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', checkServicesInView);
window.addEventListener('load', checkServicesInView);
