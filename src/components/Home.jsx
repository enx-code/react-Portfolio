import React from "react";

const Home = () => {
  return (
    <div className="row mx-1">
      <h5 id="scrollspyHeading2" className="fs-2 col-2 text-end">
        Work
      </h5>
      <div className="col-10 border-start border-dark border-4">
        <div className="seo">
          <a href="https://enx-code.github.io/web-refactor-horiSEOn/">
            <div className="nameOfProject">
              <h4>Seo</h4>
              <span>MERN stack</span>
            </div>
          </a>
        </div>
        {/* <!-- cards --> */}
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body codeWars-image">
                <a href="#" className="btn btn-primary codeWars">
                  <h4 className="card-title">CodeWars</h4>
                  <p className="card-text">Kata</p>
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body calculator-image">
                <a href="#" className="btn btn-primary calculator">
                  <h4 className="card-title">Calculator</h4>
                  <p className="card-text">React, JavaScript</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- other row --> */}
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body puzzels-image">
                <a href="#" className="btn btn-primary puzzels">
                  <h4 className="card-title">Portfolio</h4>
                  <p className="card-text">HTML, CSS</p>
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body run-image">
                <a href="#" className="btn btn-primary run">
                  <h4 className="card-title">Run Buddy</h4>
                  <p className="card-text">HTML, CSS</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <ul className="fs-4 nav justify-content-center justify-content-around align-content-center">
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
  );
};

export default Home;
