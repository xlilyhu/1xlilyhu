// function 1
$(document).ready(function() {
  $("#final-home").click(function() {
    $("body").css("background-color", "#FFBEBE")
  })
});

$(document).ready(function() {
  $("#final-about").click(function() {
    $("body").css("background-color", "#C38D9E")
  })
});

$(document).ready(function() {
  $("#final-por").click(function() {
    $("body").css("background-color", "rgb(255, 231, 239);")
  })
});

$(document).ready(function() {
  $("#final-trav").click(function() {
    $("body").css("background-color", "rgb(246, 195, 180)")
  })
});

// function 2
$(document).ready(function() {
  $(".mainpics").css("opacity", 1.0);
  $(".mainpics").hover(
    function() {$(this).animate({opacity: 0.6}, 200);},
    function() {$(this).animate({opacity: 1.0}, 200);
  })
});

//function 3
$(document).ready(function() {
  $("#final-home").mouseover(function() {
    $(this).animate({"marginTop": "-=35px"}, "fast");
  });
  $("#final-home").mouseout(function(){
    $(this).animate({"marginTop": "+=35px"}, "slow");
  })
});

//function 4
$(document).ready(function(){
    $(".fun-but").click(function(){
        $(this).hide();
    });
});

//function 5
$(document).ready(function(){
  $("#resume-button").click(function() {
    $(this).removeClass("sharp");
    $(this).addClass("round");
  }, function() {
    $(this).removeClass("round");
    $(this).addClass("sharp");
  });
});


//function 6
$(document).ready(function(){
    $(".headerimg").click(function(){
        $("#porexplan").slideUp();
    });
});
