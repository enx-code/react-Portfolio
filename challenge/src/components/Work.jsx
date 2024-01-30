import React from "react";
import { projectsData } from "../data"; // Import your project data
import Project from "./Project";

function Work() {
  return (
    <div>
      <h2>Project Gallery</h2>
      {projectsData.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </div>
  );
}

export default Work;
