// Smooth Scroll for buttons and nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Skill card click animation
document.querySelectorAll('.skill-card').forEach(skill => {
  skill.addEventListener('click', () => {
    alert(`You clicked on ${skill.textContent}! Keep building your skills 💪`);
  });
});

// Fade-in effect on scroll using Intersection Observer
const sections = document.querySelectorAll('.section');

const observerOptions = {
  threshold: 0.2
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
      entry.target.style.transition = 'all 0.6s ease-out';
      observer.unobserve(entry.target); // Trigger only once
    }
  });
}, observerOptions);

// Initialize sections hidden and observe them
sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = 'translateY(50px)';
  observer.observe(section);
});


