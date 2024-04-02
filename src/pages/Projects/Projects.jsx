import "./Projects.scss";
import Project from "../../components/Project/Project";

export default function Projects() {
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
      <ul className="projects__list">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </ul>
    </main>
  );
}
