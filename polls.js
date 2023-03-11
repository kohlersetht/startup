// Define a variable to store the selected player
let selectedPlayer = "";

// Get all radio buttons
const radioButtons = document.querySelectorAll('input[name="player"]');

// Attach an event listener to each radio button
radioButtons.forEach((radioButton) => {
  radioButton.addEventListener("change", (event) => {
    // Update the selected player variable
    selectedPlayer = event.target.value;
    console.log("Selected player: ", selectedPlayer);
  });
});

// Initialize counters for each option
let mjCount = 0;
let lbjCount = 0;
let kareemCount = 0;
let russellCount = 0;

// get the submit button
const submitButton = document.getElementById('submitButton');

// add event listener to the submit button
submitButton.addEventListener('click', () => {
  // get the selected player
  const selectedPlayer = document.querySelector('input[name="player"]:checked').value;

  // save the selected player to local storage
  localStorage.setItem('selectedPlayer', selectedPlayer);
  console.log("Saved Selected Player " + selectedPlayer);
  // Redirect to scores.html
  window.location.href = 'scores.html';
});

console.log("The selected player before the function is: " + selectedPlayer);

// Listen for submit button click
const submit = document.getElementById('submitButton');
submitButton.addEventListener('click', () => {
    // Retrieve selected player from localStorage
    const selectedPlayer = localStorage.getItem('selectedPlayer');
    console.log("The selected player is: " + selectedPlayer);

    // Increment counter for selected player
    if (selectedPlayer === 'mj') {
        mjCount++;
        console.log("MJ was selected, his vote total is " + mjCount);
    } else if (selectedPlayer === 'lbj') {
        lbjCount++;
        console.log("LBJ was selected, his vote total is " + lbjCount);
    } else if (selectedPlayer === 'kareem') {
        kareemCount++;
        console.log("Kareem was selected, his vote total is " + kareemCount);
    } else if (selectedPlayer === 'russell') {
        russellCount++;
        console.log("Russell was selected, his vote total is " + russellCount);
    }

    // Store updated counter values in localStorage
    localStorage.setItem('mjCount', mjCount);
    localStorage.setItem('lbjCount', lbjCount);
    localStorage.setItem('kareemCount', kareemCount);
    localStorage.setItem('russellCount', russellCount);
});


