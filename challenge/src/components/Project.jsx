import React from "react";
import { Link } from "react-router-dom";

function Project({ id, title, deployedLink, githubLink, image }) {
  return (
    <div>
      <h3>{title}</h3>
      <img src={image} alt={`${title} Preview`} />
      <p>
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">
          View Deployed
        </a>
      </p>
      <p>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub Repository
        </a>
      </p>
      <Link to={`/projects/${id}`}>Details</Link>
    </div>
  );
}

export default Project;