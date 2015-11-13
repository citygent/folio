$(document).ready(function() {

  var $el, 
  $allTitles = $("dt").css({
    padding: 0, // Keep as 5, prevents animating at 0 padding instead of 5 bug. 
    "cursor": "pointer" // looks clickable
  }),
  $allCells = $("dd").css({
    position: "relative",
    top: -1,
    left: 0,
    display: "none" // info cells are just positioned off page for accessibility
  });
  
  // clicking on titles does stuff
  $("body").delegate("dt", "click", function() {   
    $el = $(this);
    console.log($el)
    
    // if this is already the active cell, don't do anything
    if (!$el.hasClass("current")) {
      // removes current cell from selection of all cells
      $allTitles = $("dt").not(this);
      // close all info cells
      $allCells.slideUp();
      // return all titles (except current one) to normal size
      $allTitles.animate({
        "font-size": "1.25em",
        paddingTop: 5,
        paddingRight: 5,
        paddingBottom: 5,
        paddingLeft: 0
      });
      // animate current title to full size      
      $el.animate({
        "font-size": "2em",
        paddingTop: 5,
        paddingRight: 5,
        paddingBottom: 5,
        paddingLeft: 0
      }).next().slideDown();

      //change the image and link
      $(".screenshot1").css({"background":"url(../images/"+ $el.data("image1") +".png) center/contain no-repeat", "background-origin": "content-box" })
      $(".screenshot2").css({"background":"url(../images/"+ $el.data("image2") +".png) center/contain no-repeat", "background-origin": "content-box" })


      // $(".screenshot2").css("background", "url(../images/"+ $el.data("image2") +".png) center/contain no-repeat")
      
      // make sure the correct column is current
      $allTitles.removeClass("current");
      $el.addClass("current");  
    } 
  });



// collapse()

// function collapse() {
//     $('.work .work-title').removeClass('.active');
//     $('.work .work-content').slideUp(300).removeClass('open');
//   }

//   $('.work-title').on('click', function(e) {
//     e.preventDefault();
//     var clickedWanchor = $(this).attr('href');
//     console.log(clickedWanchor)
//     console.log(e.target)
//     if($(e.target).hasClass('.active')) {
//       console.log('active')
//       collapse();
//     } else {
//       collapse();
//       console.log('NOT active')
//       console.log(('.work' + clickedWanchor))
//       $(this).addClass('.active');
//       $(clickedWanchor).slideDown(300).addClass('open'); 
//     }
//   });


});