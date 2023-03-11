// Retrieve counter values from localStorage
const mjCount = localStorage.getItem('mjCount') || 0;
const lbjCount = localStorage.getItem('lbjCount') || 0;
const kareemCount = localStorage.getItem('kareemCount') || 0;
const russellCount = localStorage.getItem('russellCount') || 0;

// Display total votes for each option
const mjVotes = document.getElementById('mjVotes');
mjVotes.innerText = mjCount;
const lbjVotes = document.getElementById('lbjVotes');
lbjVotes.innerText = lbjCount;
const kareemVotes = document.getElementById('kareemVotes');
kareemVotes.innerText = kareemCount;
const russellVotes = document.getElementById('russellVotes');
russellVotes.innerText = russellCount;

