var colorWheel = ['#1a1a2e', '#16213e', '#31112c', '#290001', '#290001', '#1b262c', '#382933', '#41444b', "#000000", "#393b44", "#272121", "#382039"];

var quoteAuthor = "";
var quoteText = "";

function getQuote() {

  $.getJSON("https://hn.algolia.com/api/v1/search?query=javascript", function(data) {
    quoteText = data.hits;
    
    quoteAuthor = quoteText[Math.floor(Math.random() * quoteText.length)];
if (quoteAuthor.title) {
      title = quoteAuthor.title;
    } else {
      quoteAuthor = "Anonymous"
  }
 if (quoteAuthor.url) {
       url = quoteAuthor.url
    } else {
      quoteAuthor = "Anonymous"
    }
  
    $('.quoteBodyLink').animate({
      opacity: 0
    }, 500, function() {
      $('.quoteBodyLink').html(title);
            $('.quoteBodyLink')
                .attr('href', quoteAuthor.url)
                .attr('target', '_blank');
      $(this).animate({
        opacity: 1
      }, 500);
    });
    
  if (quoteAuthor.author) {
      quoteAuthor = quoteAuthor.author;
    } else {
      quoteAuthor = "Anonymous"
    }
    $('.author').animate({
      opacity: 0
    }, 500, function() {
      $('.author').html(" - " + quoteAuthor);
      $(this).animate({
        opacity: 1
      }, 500);
    });

    var choice = Math.floor(Math.random() * colorWheel.length);

    $('body').animate({
      backgroundColor: colorWheel[choice],
      color: colorWheel[choice],
    }, 1000);

    $('button').animate({
      backgroundColor: colorWheel[choice]
    }, 1000);
    
    $('#tw-button').attr("href", "https://twitter.com/intent/tweet?text="+ title + ' - ' + quoteAuthor+ ' - ' + url);
  }); 
}

$(document).ready(function() {
  var quoteInfo = [];
  $('#refresh').click(function(event) {
    event.preventDefault();
    getQuote();
  });
});

getQuote();
