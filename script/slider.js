$(function () {
  var $slider = $(".slider");
  var $backButton = $(".slider-back");
  var $forwardButton = $(".slider-forward");
  var slideWidth = $slider.find("img").width();
  var numSlides = $slider.find("img").length;
  var currentSlide = 1;

  function updateButtons() {
    if (currentSlide === 1) {
      $backButton.prop("disabled", true);
    } else {
      $backButton.prop("disabled", false);
    }
    if (currentSlide === numSlides) {
      $forwardButton.prop("disabled", true);
    } else {
      $forwardButton.prop("disabled", false);
    }
  }

  function slideTo(slide) {
    $slider.css("transform", "translateX(" + -(slide - 1) * slideWidth + "px)");
    currentSlide = slide;
    updateButtons();
  }

  $backButton.on("click", function () {
    if (currentSlide > 1) {
      slideTo(currentSlide - 1);
    }
  });

  $forwardButton.on("click", function () {
    if (currentSlide < numSlides) {
      slideTo(currentSlide + 1);
    }
  });

  updateButtons();
});
