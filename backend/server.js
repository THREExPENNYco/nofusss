/* eslint-disable linebreak-style */
const express = require('express');
const path = require('path');

const app = express();
const mongoose = require('mongoose');
require('dotenv').config({ path: '../.env' });

const cors = require('cors');

const port = process.env.PORT || 3030;

app.use(cors());
app.use(express.json());

const mongoUri = process.env.MONGODB_URI;
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
const { connection } = mongoose;
connection.once('open', () => {
  console.log('connected');
});

const potenCustRoute = require('./routes/newPotenCust.js');

app.use('/post', potenCustRoute);
app.use('/', potenCustRoute);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (res, req) => {
    res.sendfile(path.join(__dirname, 'dist', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`You're listening on: ${port}`);
});
