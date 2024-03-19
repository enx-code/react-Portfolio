import React from "react";
import { useParams } from "react-router-dom";
import { projectsData } from "./data/data";

function ProjectDetails() {
  let { projectId } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(projectId, 10));

  return (
    <div className="row vertical-center-row">
      {project ? (
        <>
          <h2 className="text-center">{project.title}</h2>
          <img src={project.image} alt={project.title} />
          {project.githubLink ? (
            <a className="text-center"
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          ) : (
            project.desc && <h3 className="text-center">{project.desc}</h3>
          )}
        </>
      ) : (
        <p className="text-center">Project not found.</p>
      )}
    </div>
  );
}

export default ProjectDetails;
