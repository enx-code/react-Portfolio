import React from "react";
import { projectsData } from "./data/data";
import Project from "./Project";

function Work() {
  return (
    <div className="row work-page">
      <h2 id="scrollspyHeading2" className="fs-2 col-2 text-end work-heading">
        Project Gallery
      </h2>
      <div className="col-10 border-start border-dark border-4 work-gallery">
        <div className="row">
          {projectsData.map((project) => (
            <Project key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
