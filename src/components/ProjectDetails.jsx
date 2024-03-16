import { useParams } from "react-router-dom";
import { projectsData } from "./data/data";

function ProjectDetails() {
  let { projectId } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(projectId, 10));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="row vertical-center-row">
      <h2 className="text-center">{project.title}</h2>
      <img
        src={project.image}
        alt={project.title}
        style={{ maxWidth: "100%" }}
      />
      {project.githubLink && (
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center"
        >
          <h3>GitHub URL</h3>
        </a>
      )}
    </div>
  );
}

export default ProjectDetails;
