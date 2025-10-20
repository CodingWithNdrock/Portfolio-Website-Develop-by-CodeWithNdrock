// ===============================
// ZOMATO WEBSITE - SCRIPT.JS
// ===============================

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Search interaction
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('search');

if (searchBtn && searchInput) {
  searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (!query) {
      alert('Please enter a dish, cuisine or restaurant to search!');
      searchInput.focus();
      return;
    }

    // Simulate a search result
    alert(`Searching for: ${query}\n(This is a demo — connect to your backend or API.)`);
  });
}

// Header scroll effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.background = 'rgba(0,0,0,0.8)';
    header.style.backdropFilter = 'blur(6px)';
  } else {
    header.style.background = 'rgba(0,0,0,0.35)';
    header.style.backdropFilter = 'blur(8px)';
  }
});

// Mobile menu toggle (optional if menu button added)
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('nav ul');
if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });
}