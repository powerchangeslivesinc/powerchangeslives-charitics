
window.addEventListener('DOMContentLoaded', (event) => {
    const header = document.getElementById('ul-header'); // Get the header element
  
    // Check if header exists (this is a safety check)
    if (header) {
      // Set the initial state based on the scroll position
      if (window.scrollY > 0) {
        header.classList.add('scrolled');
        header.classList.remove('transparent');
      } else {
        header.classList.remove('scrolled');
        header.classList.add('transparent');
      }
  
      // Listen for scroll events
      window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
          header.classList.add('scrolled');
          header.classList.remove('transparent');
        } else {
          header.classList.remove('scrolled');
          header.classList.add('transparent');
        }
      });
    }
  });

  
  
  