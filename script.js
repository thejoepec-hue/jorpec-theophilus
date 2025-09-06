// Mobile Menu Toggle
const navBtn = document.getElementById('navToggle');
const nav = document.getElementById('siteNav');
navBtn?.addEventListener('click', () => {
  const isOpen = nav.style.display !== 'flex';
  nav.style.display = isOpen ? 'flex' : 'none';
  navBtn.setAttribute('aria-expanded', isOpen);
});

// Auto-update Year
document.getElementById('year').textContent = new Date().getFullYear();
