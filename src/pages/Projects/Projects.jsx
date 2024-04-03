import "./Projects.scss";
import Project from "../../components/Project/Project";
import { useState } from "react";

export default function Projects() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const projects = [
    {
      name: "CoffeeBeen",
      url: "https://coffeebeen.abicarsonbrown.com",
      description:
        "Bringing together front-end and back-end development skills to create a web application to find and review coffee shops around London, illustrated using the GoogleMaps API.",
    },
    {
      name: "PlanPal",
      url: "https://github.com/AbiCarsonBrown/hackathon-planpal",
      description: "Hackathon",
    },
    {
      name: "whY",
      url: "https://github.com/AbiCarsonBrown/whY-client",
      description: "Hackathon",
    },
  ];

  const changeProject = (action) => {
    if (action === "prev") {
      if (activeProjectIndex === 0) {
        setActiveProjectIndex(projects.length - 1);
      } else {
        setActiveProjectIndex(activeProjectIndex - 1);
      }
    } else if (action === "next") {
      if (activeProjectIndex === projects.length - 1) {
        setActiveProjectIndex(0);
      } else {
        setActiveProjectIndex(activeProjectIndex + 1);
      }
    } else {
      setActiveProjectIndex(action);
    }
  };

  return (
    <main className="projects">
      <div className="projects__container">
        <Project project={projects[activeProjectIndex]} />
        <button
          className="projects__button projects__button--prev"
          onClick={() => {
            changeProject("prev");
          }}
        >
          Prev
        </button>

        {projects.map((_project, index) => {
          return (
            <button
              onClick={() => {
                changeProject(index);
              }}
            >
              {index}
            </button>
          );
        })}
        <button
          className="projects__button projects__button--next"
          onClick={() => {
            changeProject("next");
          }}
        >
          Next
        </button>
      </div>
    </main>
  );
}
