import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [isHovering, setIsHovering] = useState(false);
  const imagePath = `${import.meta.env.BASE_URL}matrix.jpeg`;

  return (
    <main className="home-page">
      <div
        className="jumbotron jumbotron-fluid home-hero"
        id="hero-bg"
        style={{ backgroundImage: `url(${imagePath})` }}
      >
        <div className="container home-hero-content">
          <h1 className="display-4 home-title">Create Mindset to Learn!</h1>
        </div>

        <nav className="home-contact-bar" aria-label="Social links">
          <ul className="fs-4 nav home-contact-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/enkhbat-baatar-521a3890"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li
              className="nav-item home-phone-item"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onFocus={() => setIsHovering(true)}
              onBlur={() => setIsHovering(false)}
            >
              <button
                className="nav-link home-phone-button"
                type="button"
                aria-expanded={isHovering}
                onClick={() => setIsHovering(true)}
              >
                Phone
              </button>
              {isHovering && <span className="phone-tooltip">123456789</span>}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Email
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
};

export default Home;
