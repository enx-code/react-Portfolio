import React from "react";

const Work = () => {
  return (
    <div class="row">
        <h5 id="scrollspyHeading2" class="fs-2 col-2 text-end">Work</h5>
        <div class="col-10 border-start border-dark border-4">
          <div class="seo">
            <a href="https://enx-code.github.io/web-refactor-horiSEOn/">
              <div class="nameOfProject">
                <h4>Seo</h4>
                <span>MERN stack</span>
              </div>
            </a>
          </div>
          {/* <!-- cards --> */}
          <div class="row">
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body codeWars-image">
                  <a href="#" class="btn btn-primary codeWars">
                    <h4 class="card-title">CodeWars</h4>
                    <p class="card-text">Kata</p>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body calculator-image">
                  <a href="#" class="btn btn-primary calculator">
                    <h4 class="card-title">Calculator</h4>
                    <p class="card-text">React, JavaScript</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- other row --> */}
          <div class="row">
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body puzzels-image">
                  <a href="#" class="btn btn-primary puzzels">
                    <h4 class="card-title">Portfolio</h4>
                    <p class="card-text">HTML, CSS</p>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body run-image">
                  <a href="#" class="btn btn-primary run">
                    <h4 class="card-title">Run Buddy</h4>
                    <p class="card-text">
                      HTML, CSS
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Work;
