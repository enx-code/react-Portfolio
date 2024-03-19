import React from "react";
import { Link } from "react-router-dom";

function Project({ id, title, deployedLink, githubLink, image }) {
  return (
    <div className="col-sm-6 mb-4">
      <div className="card">
        <div
          className="card-body work"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <a href={deployedLink} className="btn btn-primary codeWars">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">Deployed Site</p>
          </a>
        </div>
      </div>
      <Link to={`/work/${id}`}>Details</Link>
    </div>
  );
}

export default Project;
