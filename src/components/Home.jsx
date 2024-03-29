import React, { useState } from "react";
const Home = () => {
  const [isHovering, setIsHovering] = useState(false);
  const imagePath = `${import.meta.env.BASE_URL}matrix.jpeg`;
  console.log(imagePath)

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <div className="row">
      <div
        className="jumbotron jumbotron-fluid"
        id="hero-bg"
        style={{ backgroundImage: `url(${imagePath})` }}
      >
        <div className="container">
          <h6 className="display-4">Create Mindset to Learn!</h6>
        </div>
        <div className="navbar-fixed-bottom">
          <ul className="fs-4 nav justify-content-center justify-content-around align-content-center fixed-bottom">
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/enkhbat-baatar-521a3890"
              >
                Linkedin
              </a>
            </li>
            <li
              className="nav-item"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a className="nav-link" href="#">
                Phone{" "}
                {isHovering && <span style={{ color: "brightgreen" }}>123456789</span>}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Email
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.google.com">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
