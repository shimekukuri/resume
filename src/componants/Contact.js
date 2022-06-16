import React, { useState } from "react";
import clsx from "clsx";

export default function Contact(props) {
  const [isSubmited, setIsSubmited] = useState();
  const { children, className } = props;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("sudo upload data");
    setIsSubmited(true);
  };

  return (
    <>
      {!isSubmited && (
        <div className="componant-container">
          <div className="form-container flex-center">
            <form className="form">
              <fieldset className="flex-column">
                <legend>Your Contact information</legend>
                <input
                  id="name"
                  className="input-text"
                  type="text"
                  placeholder="Your Name"
                  required
                />
                <input
                  id="email"
                  className="input-text"
                  type="text"
                  placeholder="E-mail"
                  required
                />
                <input
                  id="phone-number"
                  className="input-text"
                  type="text"
                  placeholder="Phone Number"
                  required
                />
                <button onClick={handleFormSubmit}>Submit</button>
              </fieldset>
            </form>
          </div>
        </div>
      )}
      {isSubmited && (
        <div className="flex-center">
          <div>Thanks!</div>
        </div>
      )}
    </>
  );
}
