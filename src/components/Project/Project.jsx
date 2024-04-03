import { Link } from "react-router-dom";
import "./Project.scss";
import { useState } from "react";
import Web from "../../assets/icons/Web.svg";
import GitHub from "../../assets/icons/GitHub.svg";

export default function Project({ project }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const changeImage = (action) => {
    if (action === "prev") {
      if (activeImageIndex === 0) {
        setActiveImageIndex(project.images.length - 1);
      } else {
        setActiveImageIndex(activeImageIndex - 1);
      }
    } else if (action === "next") {
      if (activeImageIndex === project.images.length - 1) {
        setActiveImageIndex(0);
      } else {
        setActiveImageIndex(activeImageIndex + 1);
      }
    } else {
      setActiveImageIndex(action);
    }
  };

  return (
    <article className={`project project--${project.name.toLowerCase()}`}>
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
        {project.github_client && (
          <Link
            target="_blank"
            to={project.github_client}
            className="project__link project__link--client"
          >
            <img
              src={GitHub}
              alt="GitHub icon"
              className="project__link-icon"
            />
            <p className="project__link-label">Client</p>
          </Link>
        )}
        {project.github_server && (
          <Link
            target="_blank"
            to={project.github_server}
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
        <img
          src={project.images[activeImageIndex]}
          alt={`${project.name} gallery image`}
          className="project__img"
        />

        <div className="project__buttons">
          <button
            className="project__button project__button--prev"
            onClick={() => {
              changeImage("prev");
            }}
          >
            Prev
          </button>

          {project.images.map((_image, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  changeImage(index);
                }}
              >
                {index}
              </button>
            );
          })}
          <button
            className="project__button project__button--next"
            onClick={() => {
              changeImage("next");
            }}
          >
            Next
          </button>
        </div>
      </div>
    </article>
  );

  //
}
