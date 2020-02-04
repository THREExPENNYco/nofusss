import React from "react";

function Form() {

  handleSubmit = (e) => { 
    e.preventDefault(); 
    console.log(this); 
  }

  return (
    <div>
      <form className="form-container">
        <h1 className="form-header"> Request A Quote </h1>
        <hr></hr>
        <label className="form-labels" for="firstname">
          First Name:
        </label>
        <input className="input-container" type="firstname" />
        <label className="form-labels" for="lastname">
          Last Name:
        </label>
        <input className="input-container" type="lastname" />
        <label className="form-labels" for="email">
          Email:
        </label>
        <input className="input-container" type="email" />
        <label className="form-labels" for="phonenumber">
          Phone Number:
        </label>
        <input className="input-container" type="tel" />
        <label className="form-labels" for="company">
          Company:
        </label>
        <input className="input-container" type="company" />
        <label className="form-labels" type="location"> 
          Location: 
        </label>
        <select className="input-container"> 
         <option value="Houston">Houston</option> 
         <option value="San Antonio">San Antonio</option>
         <option value="Austin">Austin</option> 
        </select>
        <label className="form-labels" type="currsupplier">
          Current Supplier:
        </label>
        <input className="input-container" for="currsupplier" />
        <label className="form-labels" for="help">
          How Can We Help?
        </label>
        <textarea className="input-container" type="text" />
        <button className="form-button" onClick={(e) => this.handleSubmit()}>Submit</button>
      </form>
    </div>
  );
}

export default Form;
