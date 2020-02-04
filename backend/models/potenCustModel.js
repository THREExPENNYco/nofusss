const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const potenCust = new Schema(
  {
    firstname: {
      type: String,
      required: [true, "A first name is required"],
      min: 2,
      max: 40,
      trim: true
    },
    lastname: {
      type: String,
      required: [true, "A last name is required"],
      min: 2,
      max: 40,
      trim: true
    },
    email: {
      type: String,
      required: [true, "An email address is required"],
      trim: true,
      unique: true,
      validate: {
        validator: function(email) {
          return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            email
          );
        },
        message: "Please use a valid email address"
      }
    },
    message: {
      type: String,
      min: [10, "Field cannot be empty"],
      max: 200,
      required: [true, "We really wanna know how we can help."]
    },
    company: {
      type: String, 
      min: 2,
      max: 40,
      trim: true,
      required: [true, "A company is required"]
    },
    phonenumber: {
      type: Number,
      trim: true,
      unique: true,
      required: [true, "A phone number is required."],
      validate: {
        validator: function(number) {
          return /\d{3}-\d{3}-\d{4}/.test(number);
        },
        message: "Please use a valid phone number"
      }
    }
  },
  {
    timestamps: true
  }
);

const PotenCust = mongoose.model("PotenCust", potenCust);

module.exports = PotenCust;
