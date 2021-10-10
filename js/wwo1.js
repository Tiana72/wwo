


///////////////////////////////////////////////////////
//                 Alert Modal                       //
///////////////////////////////////////////////////////

$(function () {
  $('#alert').click(function () {
    console.log('Клик!');
    $('.modal-alert').addClass('modal-alert_active');
  });
 
  $('.modal-alert__close-button').click(function () {
    $('.modal-alert').removeClass('modal-alert_active');
  });
});