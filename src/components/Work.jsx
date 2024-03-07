import React from "react";
import { projectsData } from "./data/data";
import Project from "./Project";

function Work() {
  return (
    <div className="raw">
      <h2 id="scrollspyHeading2" class="fs-2 col-2 text-end">
        Project Gallery
      </h2>
      <div className="col-10 border-start border-dark border-4">
        {projectsData.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Work;
