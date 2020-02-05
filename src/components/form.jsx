import React, { useState } from "react";
import axios from "axios";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [currSupplier, setCurrSupplier] = useState("");
  const [location, setLocation] = useState("Houston");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false); 

  function formSubmit(e) {
    e.preventDefault(); 
    axios
      .post("http://localhost:3000/post", {
        firstname: firstName,
        lastname: lastName,
        phonenumber: phoneNumber,
        email: email,
        company: company,
        currsupplier: currSupplier,
        location: location,
        message: message
      })
      .then(function(response) {
        if (!response.data.errors) { 
          setSent(true); 
        }  
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  return (
    <div>
      {!sent ? <form className="form-container">
        <h1 className="form-header"> Request A Quote </h1>
        <hr></hr>
        <label className="form-labels" htmlFor="firstname">
          First Name:
        </label>
        <input
          className="input-container"
          id="firstname"
          onInput={e => setFirstName(e.target.value)}
        />
        <label className="form-labels" htmlFor="lastname">
          Last Name:
        </label>
        <input
          className="input-container"
          id="lastname"
          onInput={e => setLastName(e.target.value)}
        />
        <label className="form-labels" htmlFor="email">
          Email:
        </label>
        <input
          className="input-container"
          type="email"
          id="email"
          onInput={e => setEmail(e.target.value)}
        />
        <label className="form-labels" htmlFor="phonenumber">
          Phone Number:
        </label>
        <input
          className="input-container"
          type="tel"
          id="phonenumber"
          onInput={e => setPhoneNumber(e.target.value)}
        />
        <label className="form-labels" htmlFor="company">
          Company:
        </label>
        <input
          className="input-container"
          id="company"
          onInput={e => setCompany(e.target.value)}
        />
        <label className="form-labels" htmlFor="location">
          Location:
        </label>
        <select
          className="input-container"
          value={location}
          id={location}
          onChange={e => setLocation(e.target.value)}
        >
          <option value="Houston">Houston</option>
          <option value="San Antonio">San Antonio</option>
          <option value="Austin">Austin</option>
        </select>
        <label className="form-labels"  htmlFor="currSupplier">
          Current Supplier:
        </label>
        <input
          className="input-container"
          id="currSupplier"
          onInput={e => setCurrSupplier(e.target.value)}
        />
        <label className="form-labels" htmlFor="message">
          How Can We Help?
        </label>
        <textarea
          className="input-container"
          type="text"
          id="message"
          onInput={e => setMessage(e.target.value)}
        />
        <input
          className="form-button"
          type="submit"
          value="Submit"
          onClick={e => formSubmit(e)}
        />
      </form> : 
      <div className="thankyou"> 
        <h1>{`Thank You, ${firstName}`}</h1>
        <h3>We will be with you shortly</h3>
      </div> } 
    </div>  
  );
}

export default Form;
