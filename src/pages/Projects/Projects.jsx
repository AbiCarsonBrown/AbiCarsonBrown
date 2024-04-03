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

  return (
    <main className="projects">
      <div className="projects__container">
        <Project project={projects[activeProjectIndex]} />
      </div>
    </main>
  );
}
