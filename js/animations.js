$(document).ready(function(){
  $('#tweet-controls').hide();
  $('.tweet-compose').on('click', function(){
    $('.tweet-compose').height('42px');
      $('#tweet-controls').show('click');
    });

  $('.tweet-compose').blur(function(){
    $('.tweet-compose').height('21px');
      $('#tweet-controls').hide('click');
  });
    var maxLength = 140;
    $('#tweet-place').keyup(function () {
     var length = $(this).val().length;
     var length = maxLength - length;
     $('#chars').text(length);
     if (length < 11) {
       $('#chars').addClass('red');
     }
     if (length > 10) {
       $('#chars').removeClass('red');
     };
   });



 });
