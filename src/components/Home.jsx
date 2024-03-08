import React from "react";

const Home = () => {
  return (
    <div className="row">
      <div className="jumbotron jumbotron-fluid" id="hero-bg">
        <div className="container">
          <h6 className="display-4">Create Mindset to Learn!</h6>
        </div>
        <div className="navbar-fixed-bottom">
          <ul className="fs-4 nav justify-content-center justify-content-around align-content-center fixed-bottom">
            <li className="nav-item">
              <a
                className="nav-link"
                // aria-current="page"
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
              <a className="nav-link" href="www.google.com">
                Instagram
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Phone
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
