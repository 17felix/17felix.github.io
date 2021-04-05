$(document).ready(function () {
  $("#container").vide({
    mp4: "video/video.mp4",
    webm: "video/video.webm",
    ogv: "video/video.ogv",
    poster: "",
//     here must be poster.img ["img/cover-image.jpg"], but i have some troubles to enable it in right way
  });
});

$(".button-primary").fancybox();
