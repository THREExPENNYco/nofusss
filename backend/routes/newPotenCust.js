const router = require("express").Router();
let PotenCustModel = require("../models/potenCustModel.js");

router.route("/").get((req, res) => { 
  res.send('hello world'); 
})

router.route("/post").post((req, res) => {
  const name = req.body.name;
  const phonenumber = req.body.phonenumber;
  const email = req.body.email;
  const message = req.body.message;

  const newPotenCust = new PotenCustModel({
    name,
    phonenumber,
    email,
    message
  });

  newPotenCust
    .save()
    .then(() => res.json("New Poten Customer Added"))
    .catch(err => res.status(500).json(err));
});

module.exports = router;
