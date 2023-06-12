function showPosition(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  console.log("Vị trí của bạn là: " + latitude + ", " + longitude);
}

window.addEventListener("DOMContentLoaded", function () {
  var slides = document.querySelectorAll(".slide");
  var dots = document.querySelectorAll(".dot");
  var currentSlide = 0;

  function showSlide(n) {
    slides[currentSlide].classList.remove("show");
    dots[currentSlide].classList.remove("active");
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add("show");
    dots[currentSlide].classList.add("active");
  };

  function currentSlide(n) {
    showSlide(n);
  };

  showSlide(currentSlide);

  setInterval(function () {
    showSlide(currentSlide + 1);
  }, 5000);
});

jQuery('body').append('<div style="" id="loadingDiv"><div class="loader"></div></div>');
jQuery(window).on('load', function () {
  setTimeout(removeLoader, 200);
});
function removeLoader() {
  jQuery("#loadingDiv").fadeOut(200, function () {
    jQuery("#loadingDiv").remove();
  });
}

function on() {
  document.getElementById("overlay").style.display = "block";
};

function off() {
  document.getElementById("overlay").style.display = "none";
};