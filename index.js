document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.skill').forEach(skill => {
      const fill = skill.querySelector('.fill');
      const level = skill.getAttribute('data-level');
      setTimeout(() => {
        fill.style.width = level + '%';
      }, 200);
    });
  });
  


  let lastScrollY = window.scrollY;
  const nav = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY < lastScrollY) {
      // Scrolling up
      nav.classList.remove('hide');
    } else {
      // Scrolling down
      nav.classList.add('hide');
    }
    lastScrollY = window.scrollY;
  });

