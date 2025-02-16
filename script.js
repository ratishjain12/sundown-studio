const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

var elem_container = document.querySelector("#elem-container");
var fixed = document.querySelector("#image-container");

elem_container.addEventListener("mouseenter", function () {
  fixed.style.display = "block";
});

elem_container.addEventListener("mouseleave", function () {
  fixed.style.display = "none";
});

var elems = document.querySelectorAll("#elem");

elems.forEach((elem) => {
  elem.addEventListener("mouseenter", function () {
    var img = elem.getAttribute("data-image");
    fixed.style.backgroundImage = `url(${img})`;
  });
});
