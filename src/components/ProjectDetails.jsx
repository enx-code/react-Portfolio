// ProjectDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { projectsData } from "./data/data"; // Adjust this path as necessary

function ProjectDetails() {
  let { projectId } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(projectId, 10));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="row vertical-center-row">
      <img
        src={project.image}
        alt={project.title}
        style={{ maxWidth: "100%" }}
      />
      <h2 className="text-center">{project.title}</h2>
      {project.githubLink && (
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center"
        >
          GitHub URL
        </a>
      )}
    </div>
  );
}

export default ProjectDetails;
