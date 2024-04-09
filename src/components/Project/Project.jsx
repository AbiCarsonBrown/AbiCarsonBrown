import { Link } from "react-router-dom";
import "./Project.scss";
import Web from "../../assets/icons/Web.svg";
import GitHub from "../../assets/icons/GitHub-footer.svg";
import GalleryButtons from "../GalleryButtons/GalleryButtons";
import Gallery from "../Gallery/Gallery";

export default function Project({
  project,
  activeImageIndex,
  setActiveImageIndex,
}) {
  return (
    <article className="project">
      <h3 className="project__title">{project.name}</h3>
      <p className="project__description">{project.description}</p>
      <div className="project__links">
        {project.url && (
          <Link
            target="_blank"
            to={project.url}
            className="project__link project__link--web"
          >
            <img src={Web} alt="Web icon" className="project__link-icon" />
            <p className="project__link-label">Website</p>
          </Link>
        )}
        {project.github_1 && (
          <Link
            target="_blank"
            to={project.github_1}
            className="project__link project__link--client"
          >
            <img
              src={GitHub}
              alt="GitHub icon"
              className="project__link-icon"
            />
            <p className="project__link-label">
              {project.github_2 ? "Client" : "GitHub"}
            </p>
          </Link>
        )}
        {project.github_2 && (
          <Link
            target="_blank"
            to={project.github_2}
            className="project__link project__link--server"
          >
            <img
              src={GitHub}
              alt="GitHub icon"
              className="project__link-icon"
            />
            <p className="project__link-label">Server</p>
          </Link>
        )}
      </div>
      <div className="project__gallery">
        <Gallery
          galleryArray={project.images}
          activeIndex={activeImageIndex}
          setActiveIndex={setActiveImageIndex}
          type="image"
        >
          <img
            src={project.images[activeImageIndex]}
            alt={`${project.name} gallery image`}
            className="project__img"
          />
        </Gallery>
      </div>
    </article>
  );

  //
}
