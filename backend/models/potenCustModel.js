const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const potenCust = new Schema({
    name: { 
        type: String, 
        required: true, 
        min: 2, 
        max: 40, 
        trim: true 
    },
    email: { 
        type: String, 
        required: true, 
        trim: true, 
        validation: function(email) {
            return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email); 
        }
    }, 
    message: { 
        type: String, 
        min: [10, "Field cannot be empty"],
        max: 200
    },
    phonenumber: { 
        type: Number, 
        required: true, 
        trim: true, 
        validation: function(number) { 
            return /\d{3}-\d{3}-\d{4}/.test(number); 
        }
    }
}, { 
    timestamps: true, 
}); 

const PotenCust = mongoose.model('PotenCust', potenCust); 

module.exports = PotenCust; 