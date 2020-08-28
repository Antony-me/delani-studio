$(document).ready(function(){
    $("header").css('background-image', 'url(assets/backgrounds/h_img.jpg)');
    $(".services").css('background-image', 'url(assets/backgrounds/s_image.jpg)');
    $(".contact").css('background-image', 'url(assets/backgrounds/c_image.jpg)');
})
$(document).ready(function(){
    $("#work8").mouseover(function(){
      $("#overlay").show();
    }).mouseout(function(){
      $("#overlay").hide();
    });
  });

