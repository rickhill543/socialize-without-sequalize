// require necessary packages
const express = require('express');
const mongoose = require('mongoose');

// setup framework and server
const app = express();
const PORT = process.env.PORT || 3001;

// setup framework conditions
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// setup mongoose to mongodb connection using an environmental variable that fallsback on localhost
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/socialize-without-sequalize', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// debug features activated
mongoose.set('debug', true);

// framework routing
app.use(require('./routes'));

// app listens for requests on specified port
app.listen(PORT, () => console.log(`🎈 Connected on localhost:${PORT}`));
