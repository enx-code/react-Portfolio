import React from "react";
import { Link } from "react-router-dom";

function Project({ id, title, deployedLink, githubLink, image }) {
  return (
    <div className="col-sm-6">
      <div className="card">
        <div
          className="card-body"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover", 
            backgroundPosition: "center", 
            height: "100%", 
            width: "100%",
          }}
        >
          {/* <img src={image} alt={`${title} Preview`} className="card-body" /> */}

          <a href={deployedLink} className="btn btn-primary codeWars">
            <h4 className="card-title">{title}</h4>
            {/* <p className="card-text">Kata</p> */}
          </a>
        </div>
      </div>
      <Link to={`/work/${id}`}>Details</Link>
    </div>
  );
}

export default Project;
