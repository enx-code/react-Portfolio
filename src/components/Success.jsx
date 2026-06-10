import React from "react";
import { Link } from "react-router-dom";

function Success() {
  return (
    <main className="success-page">
      <section className="success-message">
        <h2>Success!</h2>
        <p>Your message was sent successfully.</p>
        <Link className="btn btn-primary fs-4" to="/">
          Back Home
        </Link>
      </section>
    </main>
  );
}

export default Success;
