/* eslint-disable linebreak-style */
const router = require('express').Router();
const path = require('path');
const PotenCustModel = require('../models/potenCustModel.js');

router.route('/').get((req, res) => {
  res.sendFile(path.join('dist', 'index.html'));
});

router.route('/post').post((req, res) => {
  const { currsupplier } = req.body;
  const { firstname } = req.body;
  const { lastname } = req.body;
  const { phonenumber } = req.body;
  const { email } = req.body;
  const { message } = req.body;
  const { company } = req.body;
  const { location } = req.body;

  const newPotenCust = new PotenCustModel({
    firstname,
    lastname,
    phonenumber,
    company,
    email,
    message,
    currsupplier,
    location,
  });

  newPotenCust
    .save()
    .then(() => res.json('New Poten Customer Added'))
    .catch((err) => res.json(err));
});

module.exports = router;
