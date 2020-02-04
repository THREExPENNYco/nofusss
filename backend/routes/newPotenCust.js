const router = require("express").Router();
let PotenCustModel = require("../models/potenCustModel.js");

router.route("/").get((req, res) => { 
  res.send('hello world'); 
})

router.route("/post").post((req, res) => {
  const currsupplier = req.body.currsupplier; 
  const firstname = req.body.firstname; 
  const lastname = req.body.lastname; 
  const phonenumber = req.body.phonenumber;
  const email = req.body.email;
  const message = req.body.message;
  const company = req.body.company; 

  const newPotenCust = new PotenCustModel({
    firstname,
    lastname, 
    phonenumber,
    company, 
    email,
    message, 
    currsupplier
  });

  try { 
  newPotenCust
    .save()
    .then(() => res.json("New Poten Customer Added"))
    .catch(err => res.json(err))
  } catch(err) { 
    res.json(err); 
  } 
    // .then(() => res.json("New Poten Customer Added"))
    // .catch(err => res.status(500).json(err));
});

module.exports = router;
