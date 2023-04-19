async function loadMJScore() {
  let mjScore = [];
  try {
    const response = await fetch('/api/mjScore');
    mjScore = await response.json();
    console.log(mjScore);
    console.log("Houston, we're doing good.")
    const mjVotes = document.getElementById('mjVotes');
    mjVotes.innerText = mjScore.length;
    console.log(mjVotes);
    document.getElementById("mjVotes").textContent = mjScore.length;
    console.log(mjScore.length);
    console.log("Right up above is the length of the score");
  } catch {
    console.log("Houston, we have a problem.");
  }
}

loadMJScore();


async function loadLebronScore() {
  let lebronScore = [];
  try {
    const response = await fetch('/api/lebronScore');
    lebronScore = await response.json();
    console.log(lebronScore);
    console.log("Houston, we're doing good.")
    const lbjVotes = document.getElementById('lbjVotes');
    lbjVotes.innerText = lebronScore.length;
    console.log(lbjVotes);
    document.getElementById("lbjVotes").textContent = lebronScore.length;
    console.log(lebronScore.length);
  } catch {
    console.log("Houston, we have a problem.");
  }
}

loadLebronScore();


async function loadKareemScore() {
  let kareemScore = [];
  try {
    const response = await fetch('/api/kareemScore');
    kareemScore = await response.json();
    console.log(kareemScore);
    console.log("Houston, we're doing good.")
    const kareemVotes = document.getElementById('kareemVotes');
    kareemVotes.innerText = kareemScore.length;
    console.log(kareemVotes);
    document.getElementById("kareemVotes").textContent = kareemScore.length;
    console.log(kareemScore.length);
  } catch {
    console.log("Houston, we have a problem.");
  }
}

loadKareemScore();


async function loadRussellScore() {
  let russellScore = [];
  try {
    const response = await fetch('/api/russellScore');
    russellScore = await response.json();
    console.log(russellScore);
    console.log("Houston, we're doing good.")
    const russellVotes = document.getElementById('russellVotes');
    russellVotes.innerText = russellScore.length;
    console.log(russellVotes);
    document.getElementById("russellVotes").textContent = russellScore.length;
    console.log(russellScore.length);
  } catch {
    console.log("Houston, we have a problem.");
  }
}

loadRussellScore();


async function loadScores() {
  try {
    // Load MJ score
    const response1 = await fetch('/api/mjScore');
    const mjScore = await response1.json();
    const mjVotes = document.getElementById('mjVotes');
    mjVotes.innerText = mjScore.length;

    // Load LeBron score
    const response2 = await fetch('/api/lebronScore');
    const lebronScore = await response2.json();
    const lbjVotes = document.getElementById('lbjVotes');
    lbjVotes.innerText = lebronScore.length;

    // Load Kareem score
    const response3 = await fetch('/api/kareemScore');
    const kareemScore = await response3.json();
    const kareemVotes = document.getElementById('kareemVotes');
    kareemVotes.innerText = kareemScore.length;

    // Load Russell score
    const response4 = await fetch('/api/russellScore');
    const russellScore = await response4.json();
    const russellVotes = document.getElementById('russellVotes');
    russellVotes.innerText = russellScore.length;

  } catch {
    console.log("Houston, we have a problem.");
  }
}

loadScores();
