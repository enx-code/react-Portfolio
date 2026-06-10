import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ContactMe() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("");
    setIsSubmitting(true);

    const formDataObj = new FormData(event.target);
    formDataObj.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj,
      });

      const data = await response.json();

      if (data.success) {
        setFormData({ name: "", email: "", message: "" }); // reset inputs
        navigate("/success");
      } else {
        setResult(data.message || "Message was not sent. Please try again.");
      }
    } catch (error) {
      console.error("FETCH ERROR:", error);
      setResult("Message was not sent. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };




  return (
    <div>
      <div className="row footer contact-page">
        <h5 id="scrollspyHeading3" className="fs-2 col-2 text-end contact-heading">
          Contact Me
        </h5>

        <div className="fs-4 nav justify-content-center justify-content-around align-content-start col-10 border-start border-dark border-4 contact-form-section">
          <form
            onSubmit={onSubmit}
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
            {result && (
              <p className="contact-error-message" role="alert">
                {result}
              </p>
            )}
            <button type="submit" className="btn btn-primary fs-4" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
