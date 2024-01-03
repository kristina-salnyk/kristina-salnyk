(() => {
  const scrollUp = document.querySelector('[data-scroll-up]');

  const trackScroll = () => {
    const scrolled = window.pageYOffset;
    const coords = document.documentElement.clientHeight;

    if (scrolled > 0.5 * coords) {
      scrollUp.classList.add('scroll-up--shown');
    }
    if (scrolled < 0.5 * coords) {
      scrollUp.classList.remove('scroll-up--shown');
    }
  };

  window.addEventListener('scroll', trackScroll);
  scrollUp.addEventListener('click', trackScroll);
  scrollUp.addEventListener('touchstart', trackScroll);
})();
