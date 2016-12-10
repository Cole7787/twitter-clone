$(document).ready(function(){

  var tweetControl = $('#tweet-controls');
  var tweetCompose = $('.tweet-compose');
  var tweetContent = $('#tweet-content');
  var countChar = $('#char-count');
  var submitTweet = $('#tweet-submit')
  var tweet = $('.tweet');
  var tweetStream = $('#stream');
  var dash = $('#dashboard');

tweetCompose.on('click', function(){
  tweetCompose.css("height", "5em");
  tweetControl.show();
});



var maxLength = 139;
tweetCompose.keyup(function(){
  var charLength = tweetCompose.val().length;
  var length = maxLength - charLength;
  countChar.text(length);
  if(length <= 10){
    countChar.css('color', 'red');
  }
  else{
    countChar.css('color', '');
  }

  if(length < 0){
    submitTweet.prop('disabled', true);
  }
  else{
    submitTweet.prop('disable', false);
  }
});

submitTweet.on('click', function(){
  var template = $('#tweetTemplate').clone();
  tweetStream.prepend(template);
  template.find(username).text(username)
});


}); //End of document
