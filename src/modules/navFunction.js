const navOperations = () => {
  // Toggle Navigation Menu
  const body = document.querySelector('body');
  const toggle = document.querySelector('[data-nav-toggle]');
  const mobileNav = document.querySelector('[data-nav-links-search]');

  toggle.addEventListener('click', (e) => {
    e.target.classList.toggle('active');
    mobileNav.classList.toggle('active');

    if (mobileNav.classList.contains('active')) {
      body.style.overflow = 'hidden';
    } else if (!e.target.classList.contains('active')) {
      body.style.overflow = 'visible';
    }
  });
};

export default navOperations;