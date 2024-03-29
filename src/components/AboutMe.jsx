import React from "react";

const AboutMe = () => {
  return (
    <div className="row mx-1">
      <h5 id="scrollspyHeading1" className="fs-2 col text-end">
        About Me
      </h5>
      <div className="card col-10 border-start border-dark border-4">
        <img
          src={`${import.meta.env.BASE_URL}./Attachment-1.png`}
          alt="portrait"
          className="aboutMe h-100"
        />
        <div className="card-body ml-9">
          <h5>
            Hello, I'm Enkhbat, a passionate front-end developer with a keen eye
            for detail and a love for technology. I recently completed a
            comprehensive front-end development bootcamp, where I honed my
            skills in HTML, CSS, JavaScript, Node.js, API, JQuery, Bootstrap and
            React. I am dedicated to creating seamless and visually appealing
            user experiences. Attention to detail is at the forefront of my
            work, ensuring that every project I undertake is polished and
            user-friendly. My enthusiasm for technology extends beyond the
            screen, and I am always eager to explore new developments in the
            ever-evolving world of web development.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
