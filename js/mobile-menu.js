(() => {
  const refs = {
    menuButton: document.querySelector('[data-mobile-menu]'),
    navMenu: document.querySelector('[data-nav-menu]'),
    navMenuLinks: document.querySelectorAll('[data-nav-link]'),
  };

  const toggleMenu = () => {
    const expanded = refs.menuButton.getAttribute('aria-expanded') === 'true' || false;
    refs.menuButton.setAttribute('aria-expanded', (!expanded).toString());
    refs.navMenu.classList.toggle('nav-menu--hidden');
    document.body.classList.toggle('mobile-menu-opened');
  };

  const closeMenu = () => {
    refs.menuButton.setAttribute('aria-expanded', 'false');
    refs.navMenu.classList.add('nav-menu--hidden');
    document.body.classList.remove('mobile-menu-opened');
  };

  refs.menuButton.addEventListener('click', toggleMenu);
  refs.navMenuLinks.forEach(ref => ref.addEventListener('click', closeMenu));
})();
