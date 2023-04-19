const votingForm = document.getElementById('votingForm');

function updateVoteTotals() {
  loadMJScore();
  loadLebronScore();
  loadKareemScore();
  loadRussellScore();
}

votingForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const selectedPlayer = document.querySelector('input[name="player"]:checked').value;
  console.log(selectedPlayer);
  console.log("^ this is the selected player");
  console.log("We're in the spot that I'm looking at right now");
  fetch(`/api/${selectedPlayer}`, {
    method: 'POST',
  })
  .then(response => response.json())
  .then(data => {
    console.log(data); // log the response data for debugging
    updateVoteTotals();
    // Update the vote count for the selected player in the api object
    api[selectedPlayer].push(1);
  })
  .catch(error => console.error(error));
});



const mjCard = document.getElementById("mjCard");

mjCard.addEventListener("mouseenter", function() {
  this.style.transform = "scale(1.1)";
});

mjCard.addEventListener("mouseleave", function() {
  this.style.transform = "scale(1)";
});

const lebronCard = document.getElementById("lebronCard");

lebronCard.addEventListener("mouseenter", function() {
  this.style.transform = "scale(1.1)";
});

lebronCard.addEventListener("mouseleave", function() {
  this.style.transform = "scale(1)";
});

const kareemCard = document.getElementById("kareemCard");

kareemCard.addEventListener("mouseenter", function() {
  this.style.transform = "scale(1.1)";
});

kareemCard.addEventListener("mouseleave", function() {
  this.style.transform = "scale(1)";
});

const russellCard = document.getElementById("russellCard");

russellCard.addEventListener("mouseenter", function() {
  this.style.transform = "scale(1.1)";
});

russellCard.addEventListener("mouseleave", function() {
  this.style.transform = "scale(1)";
});