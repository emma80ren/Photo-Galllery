//Problem: When user clicks image it goes to a dead end.
//Solution: Have image link go to an overlay - lighbox

var $darkBackground = $('<div id="dark-bg"><div><div></div></div></div>');
var $imageLarge = $("<img>");
var $caption = $("<p></p>");
var liCurrent;

var $prevArrow = $('<button id="arrowBack">&#10092;</button>');
var $nextArrow = $('<button id="arrowForward">&#10093;</button>');
               
  // Add image
$darkBackground.children("div").children("div").append($imageLarge);
//Add caption 
$darkBackground.children("div").children("div").append($caption);
//Add prevArrow
$darkBackground.children("div").append($prevArrow);
//Add next Arrow
$darkBackground.children("div").append($nextArrow);

// Add overlay
$("body").append($darkBackground);


//Capture the click event on an image link
  $("#interactiveGallery a").click(function(event) {
          event.preventDefault();
          var imgLocation = $(this).attr("href");
    //setting liCurrent variable so that it can be utilized with the navigation arrows
          liCurrent = $(this).parent();
    // Update overlay with the image linked (larger image) in the overlay
          $imageLarge.attr("src", imgLocation);
          
          
          // Get title tag to display as caption in the overlay
          var caption = $(this).children("img").attr("title");
          $caption.text(caption);
    // Show overlay
    $darkBackground.show();
          });

   

  $("button#arrowBack").click(function(event){
    if (liCurrent.is(":first-child")) {
      var liPrev = $("#interactiveGallery li").last();
    } else {
      var liPrev = liCurrent.prev();
    }
    
    var srcPrev = liPrev.children("a").attr("href");
    var captionPrev = liPrev.children("a").children("img").attr("title");
    
    $imageLarge.attr("src", srcPrev);
    $caption.text(captionPrev);
    
    liCurrent = liPrev;
    
    
       
                    }); 

  $("button#arrowForward").click(function(event){
  
    if (liCurrent.is(":last-child")) {
      var liNext = $("#interactiveGallery li").first();
    } else {
      var liNext = liCurrent.next();
    }
    
    var srcNext = liNext.children("a").attr("href");
    $imageLarge.attr("src", srcNext);
        
    var captionNext = liNext.children("a").children("img").attr("title");
     $caption.text(captionNext);
    
    liCurrent = liNext;
    
      
                    }); 

   // Capture the click event on an overlay
    //Hide overlay
$("#dark-bg div div").click(function(){
  $darkBackground.fadeOut(1500);
  
});






