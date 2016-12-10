$(document).ready(function(){

  var tweetControl = $('#tweet-controls');
  var tweetCompose = $('.tweet-compose');
  var tweetContent = $('#tweet-content');
  var countChar = $('#char-count');
  var submitTweet = $('#tweet-submit')
  var tweet = $('.tweet');
  var tweetStream = $('#stream');
  var dash = $('#dashboard');
  var tweetActions = $('.tweet-actions');
  var tweetStats = $('.stats');
  var tweetText = $('.tweet-text');
  var content = $('.content');


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
    var tweetWords = tweetCompose.val()
  tweetStream.prepend(template);
  template.find('.fullname').text('Cole Allan');
  template.find('.username').text('@Cole7787');
  template.find('.avatar').attr('src', "img/alagoon.jpg");
  template.find('.tweet-text').text(tweetWords);
});
content.hover(function(){
  $(this).children('.tweet-actions').css({visibility: "visible"}); },
  function(){
    $(this).children('.tweet-actions').css({visibility: "hidden"});
  });



tweetStats.hide();
tweet.on('click', function(){
  tweetStats.toggle();
})

}); //End of document
