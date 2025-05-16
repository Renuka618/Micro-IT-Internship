// Fade-in sections when visible
const fadeSections = document.querySelectorAll('.fade-section');

function showOnScroll() {
  fadeSections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);

// Back to top button
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dynamic footer year
document.getElementById('year').textContent = new Date().getFullYear();
