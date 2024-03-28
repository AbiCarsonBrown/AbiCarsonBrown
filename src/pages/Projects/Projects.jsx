import { Link } from "react-router-dom";
import "./Projects.scss";

export default function Projects() {
  return (
    <main className="projects">
      <h1 className="projects__title">Projects</h1>
      <div className="project">
        <Link
          to="https://coffeebeen.abicarsonbrown.com"
          className="project__link"
          target="_blank"
        >
          CoffeeBeen
        </Link>
        <p className="project__description">
          Bringing together front-end and back-end development skills to create
          a web application to find and review coffee shops around London,
          illustrated using the GoogleMaps API.
        </p>
      </div>
    </main>
  );
}
