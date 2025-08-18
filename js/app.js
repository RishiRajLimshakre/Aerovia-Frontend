window.addEventListener('scroll', function () {
  const section = document.getElementById('scroll-bg-section');
  const rect = section.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight * 0.8) {
    section.classList.add('active');
  } else {
    section.classList.remove('active');
  }
});
