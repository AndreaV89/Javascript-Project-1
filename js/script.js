/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


/*** Array of quotes ***/

const quotes = [
  {
    quote: "We are just an advanced breed of monkeys on a minor planet of a very average star. But we can understand the Universe. That makes us something very special.",
    source: "Stephen Hawking",
    tag: "Science",
    color: "#00FFFF"
  },
  {
    quote: "Mankind was born on Earth. It was never meant to die here.",
    source: "Joseph Cooper",
    citation: "Interstellar",
    year: "2014",
    tag: "Cinema",
    color: "#00FF00"
  },
  {
    quote: "The good thing about science is that it’s true whether or not you believe in it.",
    source: "Neil deGrasse Tyson",
    citation: 'Skeptic Blog: "Reality Check"',
    year: "2011",
    tag: "Science",
    color: "#FF00FF"
  },
  {
    quote: "Two things are infinite. The universe and the human stupidity. ...and I'm not so sure about the universe",
    source: "Albert Einstein",
    tag: "Science",
    color: "#FFFF00"
  },
  {
    quote: "I've always believed that you should never, ever give up and you should always keep fighting even when there's only a slightest chance.",
    source: "Michael Schumacher",
    year: "2007",
    tag: "Sport",
    color: "#FF0000"
  }
];


/*** getRandomQuote function ***/
/*** This function select a random quote object from the array 'quotes' ***/

function getRandomQuote () {
  randomNumber = Math.floor(Math.random() * quotes.length);                             // Generate a random number from 0 to the 'quotes' array length
  randomQuote = quotes[randomNumber];                                                   // Select the random quote using the random number as index
  return randomQuote;                                                                   // Return the selected quote object
}

/*** Random Color Generator ***/
/*** This function generate a random color ***/

function getRandomColor() {
  var letters = '0123456789ABCDEF';                                                     // A string with all possible letters and numbers for a color                  
  var color = '#';                                                                      // Inizialize the variable color with #
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];                                   // Select a random character from 'letters' and add it to the color for 6 times
  }
  return color;                                                                         // Return the random color
}

/*** printQuote function ***/
/*** This function call the getRandomQuote function and create a variable that contains the html with all the elements ***/
function printQuote () {
  selectedQuote = getRandomQuote();
  html = '<p class="quote">' + selectedQuote.quote + '</p>';                            // Add the <p> element with the quote
  html += '<p class="source">' + selectedQuote.source;                                  // Add the <p> element with the source
  if(selectedQuote.citation) {                                                          // If the quote has a citation
    html += '<span class="citation">' + selectedQuote.citation + '</span>';             // Add the <span> element with the citation
  }
  if(selectedQuote.year) {                                                              // If the quote has a year
    html += '<span class="year">' + selectedQuote.year + '</span>';                     // Add the <span> element with the year
  }
  if(selectedQuote.tag) {                                                               // If the quote has a tag
    html += '<span class="tag">"' + selectedQuote.tag + '"</span>';                     // Add the <span> element with the tag
  }
  html += '</p';
  document.getElementById('quote-box').innerHTML = html;                                // Updates the HTML content of the #quote-box
  document.body.style.backgroundColor = getRandomColor();                               // Call the getRandomColor function and updates the background color with a random color
}

setInterval(printQuote, 4000);                                                          // Every 4 seconds automatically prints a new quote

document.getElementById('load-quote').addEventListener("click", printQuote, false);     // Event Listener for the button click