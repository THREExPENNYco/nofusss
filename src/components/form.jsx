import React, { useState } from "react";
import axios from "axios";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [currSupplier, setCurrSupplier] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");

  function formSubmit(e) {
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
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  return (
    <div>
      <form className="form-container">
        <h1 className="form-header"> Request A Quote </h1>
        <hr></hr>
        <label className="form-labels" htmlFor="firstname">
          First Name:
        </label>
        <input
          className="input-container"
          type="firstname"
          onInput={e => setFirstName(e.target.value)}
        />
        <label className="form-labels" htmlFor="lastname">
          Last Name:
        </label>
        <input
          className="input-container"
          type="lastname"
          onInput={e => setLastName(e.target.value)}
        />
        <label className="form-labels" htmlFor="email">
          Email:
        </label>
        <input
          className="input-container"
          type="email"
          onInput={e => setEmail(e.target.value)}
        />
        <label className="form-labels" htmlFor="phonenumber">
          Phone Number:
        </label>
        <input
          className="input-container"
          type="tel"
          className="input-container"
          onInput={e => setPhoneNumber(e.target.value)}
        />
        <label className="form-labels" htmlFor="company">
          Company:
        </label>
        <input
          className="input-container"
          type="company"
          onInput={e => setCompany(e.target.value)}
        />
        <label className="form-labels" type="location">
          Location:
        </label>
        <select
          className="input-container"
          value={location}
          onChange={e => setLocation(e.target.value)}
        >
          <option></option>
          <option value="Houston">Houston</option>
          <option value="San Antonio">San Antonio</option>
          <option value="Austin">Austin</option>
        </select>
        <label className="form-labels" type="currsupplier">
          Current Supplier:
        </label>
        <input
          className="input-container"
          htmlFor="currsupplier"
          onInput={e => setCurrSupplier(e.target.value)}
        />
        <label className="form-labels" htmlFor="help">
          How Can We Help?
        </label>
        <textarea
          className="input-container"
          type="text"
          onInput={e => setMessage(e.target.value)}
        />
        <input
          className="form-button"
          type="submit"
          value="Submit"
          onClick={e => formSubmit(e)}
        />
      </form>
    </div>
  );
}

export default Form;
