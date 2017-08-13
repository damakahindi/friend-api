const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Friend = require('./server/models/friend');

// Initializing the express app
const app = express();

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set up the port
const port = process.env.PORT || 8080;

// connect to our database
mongoose.connect('mongodb://dama:dama@ds145283.mlab.com:45283/friend', {
  useMongoClient: true,
}).then(
  () => { console.info('Connected to database')},
  (err) => { console.info('Failed to connect to database', err) }
);

// get an instance of the express Router
const router = express.Router();

// test route to make sure everything is working

router.get('/', (req, res) => {
  res.json({ message: 'hooray! welcome to our api!' });
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);


// START THE SERVER
// =============================================================================
app.listen(port, () => {
  console.info('==> 🌎 Listening on port %s. Open up http://127.0.0.1:%s/ ', port, port);
  console.info('==> 🌎 API port %s. Open up http://127.0.0.1:%s/api ', port, port);
});

