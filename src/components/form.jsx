/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [currSupplier, setCurrSupplier] = useState('');
  const [location, setLocation] = useState('Houston');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [formError, setError] = useState({});

  function formSubmit(e) {
    e.preventDefault();
    axios
      .post('http://localhost:3030/post', {
        firstname: firstName,
        lastname: lastName,
        phonenumber: phoneNumber,
        email,
        company,
        currsupplier: currSupplier,
        location,
        message,
      })
      .then((response) => {
        if (!response.data.errors) {
          setSent(true);
        }
        const resError = response.data.errors;
        setError(resError);
      })
      .catch((error) => {});
  }

  return (
    <div className="form-background">
      {/* Ternary statement display form or null dependent on sent state  */}
      {!sent ? (
        <form className="form-container" onSubmit={formSubmit}>
          <h1 className="form-header"> Request A Quote </h1>
          <hr />
          <label className="form-labels">
            First Name:
            {' '}
            {formError.hasOwnProperty('firstname') ? (
              <span className="warning">{formError.lastname.message}</span>
            ) : null}
          </label>
          <input
            form="form"
            className="input-container"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label className="form-labels">
            Last Name:
            {' '}
            {formError.hasOwnProperty('lastname') ? (
              <span className="warning">{formError.lastname.message}</span>
            ) : null}
          </label>
          <input
            className="input-container"
            onChange={(e) => setLastName(e.target.value)}
          />
          <label className="form-labels">
            Email:
            {' '}
            {formError.hasOwnProperty('email') ? (
              <span className="warning">{formError.email.message}</span>
            ) : null}
          </label>
          <input
            className="input-container"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="form-labels">
            Phone Number:
            {' '}
            <span className="example">xxx-xxx-xxxx</span>
            {' '}
            {formError.hasOwnProperty('phonenumber') ? (
              <span className="warning">{formError.phonenumber.message}</span>
            ) : null}
          </label>
          <input
            className="input-container"
            type="tel"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <label className="form-labels">
            Company:
            {' '}
            {formError.hasOwnProperty('company') ? (
              <span className="warning">{formError.company.message}</span>
            ) : null}
          </label>
          <input
            className="input-container"
            onChange={(e) => setCompany(e.target.value)}
          />
          <label className="form-labels">
            Location:
            {' '}
            {formError.hasOwnProperty('location') ? (
              <span className="warning">{formError.location.message}</span>
            ) : null}
          </label>
          <select
            className="input-container"
            value={location}
            id={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="Houston">Houston</option>
            <option value="San Antonio">San Antonio</option>
            <option value="Austin">Austin</option>
          </select>
          <label className="form-labels">
            Current Supplier:
            {' '}
            {formError.hasOwnProperty('currsupplier') ? (
              <span className="warning">{formError.currsupplier.message}</span>
            ) : null}
          </label>
          <input
            className="input-container"
            onChange={(e) => setCurrSupplier(e.target.value)}
          />
          <label className="form-labels">
            How Can We Help?
            {' '}
            {formError.hasOwnProperty('message') ? (
              <span className="warning">{formError.message.message}</span>
            ) : null}
          </label>
          <textarea
            className="input-container"
            type="text"
            onChange={(e) => setMessage(e.target.value)}
          />
          <input className="form-button" type="submit" value="Submit" />
        </form>
      ) : (
        <div className="thankyou">
          <h1>{`Thank You, ${firstName}`}</h1>
          <h3>We will be with you shortly</h3>
        </div>
      )}
    </div>
  );
}

export default Form;
