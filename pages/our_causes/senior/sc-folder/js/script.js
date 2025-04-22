
$(window).ready(function () {
  $('.nav-btn').on('click', function () {
    $(this).toggleClass('open');
  });

  $('.image-infinite-bg').each( function () {

    var currentIndex = 0;
    var $backgroundImage = $('.image-infinite-bg');
    var images = $backgroundImage.data('images');

    // console.log($backgroundImage.data('images'));


    // Cek apakah 'images' terdefinisi dan merupakan array
    if (!Array.isArray(images) || images.length === 0) {
      console.error('Images array is not defined or empty.');
      return; // Keluar dari fungsi jika 'images' tidak valid
    }

    function changeBackgroundImage() {
      $backgroundImage.removeClass('animation-bg');
      currentIndex = (currentIndex + 1) % images.length;
      var imagePath = images[currentIndex];
      $backgroundImage.css("background-image", "url('" + imagePath + "')");
      $backgroundImage[0].offsetHeight;
      $backgroundImage.addClass('animation-bg');
    }
    changeBackgroundImage();
    setInterval(changeBackgroundImage, 5000);
  });

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 100) {
      $("#header").addClass('glass-effect');
    } else {
      $("#header").removeClass("glass-effect");
    }
  })
});


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
