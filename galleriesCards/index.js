const slides = document.querySelectorAll('.slide');

slides.forEach(item => {
  item.addEventListener('click', () => {
    clearActiveClasses();
    item.classList.add('active');
  })
});

function clearActiveClasses() {
  slides.forEach((item) => {
    item.classList.remove('active');
  });
};
