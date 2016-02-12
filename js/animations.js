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
  $('#char-count').keyUp(updateCount);
  function updateCount(){
    var count = $(this).val().length;
    $('#char-count').text(count);
  };













})
