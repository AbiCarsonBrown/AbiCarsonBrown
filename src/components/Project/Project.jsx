import "./Project.scss";

export default function Project({ project }) {
  return (
    <li className="project">
      <a className="project__link" target="_blank" href={project.url}>
        {project.name}
      </a>
      <p className="project__description">{project.description}</p>
    </li>
  );
}
