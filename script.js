$(document).ready(function(){
  $(".ham_container").click(function(){
    $(this).toggleClass("is-active");
  });
});


$(document).ready(function(){
    $(".graphic").click(function(){
        $(".graphic_frame").toggleClass("is-active");
        $(".box1").addClass("is-active");
        
        if($(".web_frame, .contact_frame").hasClass('is-active'))
        {$(".web_frame, .contact_frame").removeClass('is-active')}

    });
});

$(document).ready(function(){
    $(".web").click(function(){
        $(".web_frame").toggleClass("is-active");
        $(".box1").addClass("is-active");
        
        if($(".graphic_frame, .contact_frame").hasClass('is-active'))
        {$(".graphic_frame, .contact_frame").removeClass('is-active')} 
    });
});

$(document).ready(function(){
    $(".contact").click(function(){
        $(".contact_frame").toggleClass("is-active");
        $(".box1").addClass("is-active");
            
        if($(".web_frame, .graphic_frame").hasClass('is-active'))
        {  $(".web_frame, .graphic_frame").removeClass('is-active')} 

    });
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

//$(document).ready(function() {
//    var $toggleItems = $( '[class^=toggle-item]' );
//
//    $toggleItems.hide();
//
//    $( '[class^=link]' ).click( function()
//    {
//        var $this = $( this );
//        var $toggleItem = $( '.toggle-item-' + $this.attr( 'className' ) );
//        var doShow = ! $toggleItem.is( ':visible' );
//
//        $toggleItems.hide();
//
//        if( doShow )
//        {
//            $toggleItem.show();
//        }
//
//        return false;
//    });
//});