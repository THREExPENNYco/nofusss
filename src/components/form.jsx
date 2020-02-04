import React from "react";

function Form() {
  return (
    <div>
      <form className="form-container">
        <h1 className="form-header"> Request A Quote </h1>
        <hr></hr>
        <label className="form-labels" for="name">
          Name:
        </label>
        <input className="input-containter" type="name" />
        <label className="form-labels" for="email">
          Email:
        </label>
        <input className="input-containter" type="email" />
        <label className="form-labels" for="phone number">
          {" "}
          Phone Number:{" "}
        </label>
        <input className="input-containter" type="tel" />
        <label className="form-labels" for="help">
          How Can We Help?
        </label>
        <textarea className="input-containter" type="text" />
        <button className="form-button">Submit</button>
      </form>
    </div>
  );
}

export default Form;
