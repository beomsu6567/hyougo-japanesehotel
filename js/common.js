$(function () {
  $(".slide-menu-btn").on("click", function () {
    if ($("body").hasClass("open")) {
      $("body").removeClass("open");
    } else {
      $("body").addClass("open");
    }
  });
  $(".slide-bg-box,.slide-menu .nav-list li a").on("click", function () {
    $("body").removeClass("open");
  });
});
