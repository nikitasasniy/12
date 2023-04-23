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
