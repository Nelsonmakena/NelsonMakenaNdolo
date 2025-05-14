document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.skill').forEach(skill => {
      const fill = skill.querySelector('.fill');
      const level = skill.getAttribute('data-level');
      setTimeout(() => {
        fill.style.width = level + '%';
      }, 200);
    });
  });
  

