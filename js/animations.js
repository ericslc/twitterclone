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
$('textarea').keyup(updateCount);
function updateCount(){
  var num = $(this).val().length;
  var maxLength = 140;
  var nums = maxLength - num;
  $('.char').text(nums);

    if(nums <= 10){
      $('.char').addClass('red');
    }
    if(nums > 10){
      $('.char').removeClass('red');
    };



  };















})
