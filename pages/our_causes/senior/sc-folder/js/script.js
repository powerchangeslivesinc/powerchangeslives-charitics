
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