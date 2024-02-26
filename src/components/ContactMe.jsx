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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div>
      <div className="row footer">
        <h5 id="scrollspyHeading3" className="fs-2 col-2 text-end">
          Contact Me
        </h5>
        <ul className="fs-4 nav justify-content-center justify-content-around align-content-start col-10 border-start border-dark border-4">
          <li className="nav-item">
            <a
              className="nav-link active"
              aria-current="page"
              href="www.linkedin.com/in/enkhbat-baatar-521a3890"
            >
              Linkedin
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Email
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href='www.google.com'>
              Instagram
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Phone
            </a>
          </li>
        </ul>
        <div className="row justify-content-end mt-5">
          <form
            onSubmit={handleSubmit}
            className="col-10 fs-4 border-start border-dark border-4"
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
                className="form-control"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary fs-4">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
