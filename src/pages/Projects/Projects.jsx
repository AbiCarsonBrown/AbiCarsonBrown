import "./Projects.scss";
import Project from "../../components/Project/Project";
import { useState } from "react";
import shopDeskCB from "../../assets/coffeebeen/coffeeshop-desktop.png";
import shopMobCB from "../../assets/coffeebeen/coffeeshop-mobile.png";
import homeDeskCB from "../../assets/coffeebeen/home-desktop.png";
import homeMobCB from "../../assets/coffeebeen/home-mobile-list.png";
import loginMobCB from "../../assets/coffeebeen/login-mobile.png";
import profileTabCB from "../../assets/coffeebeen/profile-tablet.png";

export default function Projects() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const projects = [
    {
      name: "CoffeeBeen",
      url: "https://coffeebeen.abicarsonbrown.com",
      github_client: "",
      github_server: "",
      description:
        "Bringing together front-end and back-end development skills to create a web application to find and review coffee shops around London, illustrated using the GoogleMaps API.",
      images: [
        shopDeskCB,
        shopMobCB,
        homeDeskCB,
        homeMobCB,
        loginMobCB,
        profileTabCB,
      ],
    },
    {
      name: "PlanPal",
      url: "",
      github_client: "https://github.com/AbiCarsonBrown/hackathon-planpal",
      github_server: "",
      description: "Hackathon",
      images: [],
    },
    {
      name: "whY",
      url: "",
      github_client: "https://github.com/AbiCarsonBrown/whY-client",
      github_server: "",
      description: "Hackathon",
      images: [],
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
      <section className="projects__container">
        <Project project={projects[activeProjectIndex]} />
      </section>
      <div className="projects__buttons">
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
              key={index}
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
