const text = document.getElementById("increaseSize");

text.addEventListener("mouseover", function() {
  text.style.fontSize = "60px"; // Increase the font size on mouseover
});

text.addEventListener("mouseout", function() {
  text.style.fontSize = "40px"; // Reset the font size on mouseout
});

function displayQuote(data) {
  fetch('https://api.quotable.io/random')
    .then((response) => response.json())
    .then((data) => {
      const containerEl = document.querySelector('#quote');

      const quoteEl = document.createElement('p');
      quoteEl.classList.add('quote');
      const authorEl = document.createElement('p');
      authorEl.classList.add('author');

      quoteEl.textContent = data.content;
      authorEl.textContent = data.author;

      containerEl.appendChild(quoteEl);
      containerEl.appendChild(authorEl);
    });
}

function callService(url, displayCallback) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      displayCallback(data);
    });
}

callService("https://api.quotable.io/random", displayQuote);