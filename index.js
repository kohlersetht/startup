const express = require('express');
const app = express();
const DB = require('./database.js');


// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

let mjScore = [];
let lebronScore = [];
let kareemScore = [];
let russellScore = [];
console.log(mjScore);
console.log(lebronScore);
console.log(kareemScore);
console.log(russellScore);


// MJ Score
apiRouter.get('/mjScore', (_req, res) => {
  console.log('Got request for /mjScore');
  res.send(mjScore);
  console.log("Made it into the /mjScore thing in index.js");
})

// Lebron Score
apiRouter.get('/lebronScore', (_req, res) => {
  res.send(lebronScore);
})

// Kareem Score
apiRouter.get('/kareemScore', (_req, res) => {
  res.send(kareemScore);
})

// Russell Score
apiRouter.get('/russellScore', (_req, res) => {
  res.send(russellScore);
})


// Update player's vote totals
// MJ Score
apiRouter.post('/mjScore', (_req, res) => {
  mjScore.push(1);
  console.log("Pushing on a new vote for MJ");
  res.send(mjScore);
});

// Lebron Score
apiRouter.post('/lebronScore/vote', (_req, res) => {
  lebronScore.push(1);
  res.send(lebronScore);
});

// Kareem Score
apiRouter.post('/kareemScore/vote', (_req, res) => {
  kareemScore.push(1);
  res.send(kareemScore);
});

// Russell Score
apiRouter.post('/russellScore/vote', (_req, res) => {
  russellScore.push(1);
  res.send(russellScore);
});


// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});