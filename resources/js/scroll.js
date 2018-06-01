$(document).ready(function() {
  var scrolllink = $(".scroll");

  // Smooth scrolling

  scrolllink.click(function(event) {
    event.preventDefault();
    $("body,html").animate(
      {
        scrollTop: $(this.hash).offset().top
      },
      1000
    );
  });
});
