import bootstrap from "bootstrap";

import $ from "jquery";

import Popper from "popper.js";

var modal = document.getElementById("jq-modal");

var span = document.getElementsByClassName("jq-close")[0];

$("#openModal").click(function () {
  modal.style.display = "block";
});

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

$("#openModal").click(function () {
  $("#jq-modal").css("display", "block");
});

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
