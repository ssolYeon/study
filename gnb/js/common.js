$(function () {
  let $naveMenu = $(".navi > li");
  let $gnbBg = $(".gnbBg");

  $($naveMenu).mouseenter(function () {
    $(this).parents("header").addClass("active");
    $(this).parents("header").find(".gnbBg").slideDown(300);

    $($naveMenu).removeClass("active");
    $(this).addClass("active");
  });

  $($naveMenu, $gnbBg).mouseleave(function () {
    $($naveMenu).parents("header").removeClass("active");
    $($naveMenu).removeClass("active");
    $($gnbBg).slideUp(300);

  });
});

