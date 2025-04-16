window.onload = () => {
    const navbar = document.getElementById('ul-header');
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > 350) {
        navbar.classList.add('scrolled');
        navbar.classList.remove('transparent');
      } else {
        navbar.classList.add('transparent');
        navbar.classList.remove('scrolled');
      }
    });
  
    // Start transparent
    navbar.classList.add('transparent');
  };
  