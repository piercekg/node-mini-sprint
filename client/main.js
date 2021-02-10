$(document).ready(function() {

  $body = document.body;
// get a quote from the server when the page loads and add it to the dom
  getQuote();

  setInterval(function() { getQuote(); }, 2000);
// when the user enters data and clicks submit, post the quote to the server
  $('#submit').click((e) => {
    e.preventDefault();
    let quote = $('input').val();
    addQuote(quote);
  });

  function getQuote(){
    //YOUR CODE HERE, Add a GET request
    $.get('http://localhost:3000/quote/', function(data) {
    $quote = $(`<p class="randomQuotes">${data}</p>`);
    $(".quotes").append($quote);
    });

  }

  function addQuote(quote){
    //YOUR CODE HERE, Add a POST request
    console.log(quote);
    $.post('http://localhost:3000/quote/', quote, function(data) {
      console.log('data');
    });

  }
});
