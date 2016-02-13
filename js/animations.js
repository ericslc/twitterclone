$(document).ready(function(){
  $('#tweet-controls').hide();
  $('.tweet-compose').on('click', function(){
    $('.tweet-compose').height('42px');
      $('#tweet-controls').show('click');
    });

  $('.tweet-compose').blur(function(){
    $('.tweet-compose').height('21px');
  });
    var maxLength = 140;
    $('#tweet-place').keyup(function () {
     var length = $(this).val().length;
     var length = maxLength - length;
     $('#chars').text(length);
     if (length < 11) {
       $('#chars').addClass('red');
     };
     if (length > 10) {
       $('#chars').removeClass('red');
     };
     if(length >= 0){
       $('#tweet-submit').prop('disabled', false);
     }
     else if(length <= -1){
       $('#tweet-submit').prop('disabled', true);
     };
$('#tweet-submit').on('click', function(){
$('#stream').prepend($('#tweet-controls'))
$('#stream').prepend($('#tweet-place'));
$('#stream').prepend($('#dashboard'));
$('ul.mini li span').hide();
$('')

});
   });




 });
