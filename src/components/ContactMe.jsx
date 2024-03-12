import React, { useState } from "react";

function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Simplified handleSubmit just logs the data
  const handleSubmit = (e) => {
    console.log("Form submitted:", formData);
    // No e.preventDefault(); allow the form to submit normally
  };

  return (
    <div>
      <div className="row footer">
        <h5 id="scrollspyHeading3" className="fs-2 col-2 text-end">
          Contact Me
        </h5>

        <div className="fs-4 nav justify-content-center justify-content-around align-content-start col-10 border-start border-dark border-4">
          <form
            action="https://getform.io/f/lakomgya?redirect=https://https://coruscating-bavarois-3bff34.netlify.app/thank-you"
            method="POST"
            onSubmit={handleSubmit}
            className="col-10 fs-4"
          >
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message:
              </label>
              <textarea
                rows={10}
                className="form-control"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary fs-4">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
