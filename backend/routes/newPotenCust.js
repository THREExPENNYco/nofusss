const router = require("express").Router();
let PotenCustModel = require("../models/potenCustModel.js");

router.route("/").get(() => {})

router.route("/post").post((req, res) => {
  const currsupplier = req.body.currsupplier; 
  const firstname = req.body.firstname; 
  const lastname = req.body.lastname; 
  const phonenumber = req.body.phonenumber;
  const email = req.body.email;
  const message = req.body.message;
  const company = req.body.company;
  const location = req.body.location; 

  const newPotenCust = new PotenCustModel({
    firstname,
    lastname, 
    phonenumber,
    company, 
    email,
    message, 
    currsupplier, 
    location 
  });

  newPotenCust
    .save()
    .then(() => res.json("New Poten Customer Added"))
    .catch(err => res.json(err))
});

module.exports = router;
