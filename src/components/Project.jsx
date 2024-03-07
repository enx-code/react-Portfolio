import React from "react";
import { Link } from "react-router-dom";

function Project({ id, title, deployedLink, githubLink, image }) {
  return (
    <div>
      {/* //   <h3>{title}</h3>
    //   <img src={image} alt={`${title} Preview`} />
    //   <p>
    //     <a href={deployedLink} target="_blank" rel="noopener noreferrer">
    //       View Deployed
    //     </a>
    //   </p>
    //   <p>
    //     <a href={githubLink} target="_blank" rel="noopener noreferrer">
    //       GitHub Repository
    //     </a>
    //   </p> */}
      {/* <div className="row"> */}
        <div className="col-sm-8">
          <div className="card">
            <div className={`card-body ${image}`}>
              <a href={deployedLink} className="btn btn-primary codeWars">
                <h4 className="card-title">{title}</h4>
                {/* <p className="card-text">Kata</p> */}
              </a>
            </div>
          </div>
        </div>
      {/* </div> */}
      <Link to={`/work/${id}`}>Details</Link>
    </div>
  );
}

export default Project;
