$(document).ready(function() {

collapse()

function collapse() {
    $('.work .work-title').removeClass('.active');
    $('.work .work-content').slideUp(300).removeClass('open');
  }

  $('.work-title').on('click', function(e) {
    e.preventDefault();
    var clickedWanchor = $(this).attr('href');
    console.log(clickedWanchor)
    console.log(e.target)
    if($(e.target).hasClass('.active')) {
      console.log('active')
      collapse();
    } else {
      collapse();
      console.log('NOT active')
      console.log(('.work' + clickedWanchor))
      $(this).addClass('.active');
      $(clickedWanchor).slideDown(300).addClass('open'); 
    }
  });


});