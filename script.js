$(document).ready(function(){
  $(".menu-options").on("click",function(){
    /*Get the element index*/
    var currentIndex = $(this).index();
    var planetInfo = $('.planet-info');
    var planetImage = $(".planet-image");
   /*toggle the class based on index.*/ $(planetInfo[currentIndex]).toggleClass("hide-planet-info");
   /*For user convenience.  Close any panels that might be open when opening another panel.*/ planetInfo.not($(planetInfo[currentIndex])).addClass("hide-planet-info");
    /*highlight the planet*/
    $(planetImage[currentIndex]).toggleClass("highlight");
    /*Turn off the highlight for all others*/
    planetImage.not($(planetImage[currentIndex])).removeClass("highlight");
  });
});
