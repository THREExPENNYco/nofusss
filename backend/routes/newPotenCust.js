/* eslint-disable linebreak-style */
const router = require('express').Router();
const path = require('path');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SEND_MAIL_API_KEY);
const PotenCustModel = require('../models/potenCustModel.js');

const emailQuote = (body) => {
  const msg = {
    to: 'shay@nfsservices.com',
    from: 'Nofuss@nfsservices.com',
    subject: 'You Have A New Quote Request',
    html: `<ul><h1>You Have A New Quote</h1>
              <li>Their name is: ${body.firstname}</li> 
              <li>Their number is: ${body.phonenumber}</li> 
              <li>Their email is: ${body.email}</li> 
              <li>Their message is: ${body.message}</li>
          </ul>`,
  };

  sgMail
    .send(msg)
    .then((error) => console.log(error))
    .catch(console.log('There was an reaction'));
};

router.route('/').get((req, res) => {
  res.sendFile(path.resolve('dist/index.html'));
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

  emailQuote(req.body);
});

module.exports = router;
