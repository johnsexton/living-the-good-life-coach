// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Change header style on scroll
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Toggle navigation menu
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const toggle = document.getElementById('nav-toggle');
        if (toggle.checked) toggle.checked = false;
    });
});

// Open external links in a new tab
document.querySelectorAll('a[href]').forEach(link => {
  const href = link.getAttribute('href');
  if (
    href.startsWith('http') && !href.includes(location.hostname) ||
    href.startsWith('mailto:')
  ) {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  }
});