import "./Projects.scss";
import Project from "../Project/Project";

export default function Projects() {
  const projects = [
    {
      name: "CoffeeBeen",
      url: "https://coffeebeen.abicarsonbrown.com",
      description:
        "Bringing together front-end and back-end development skills to create a web application to find and review coffee shops around London, illustrated using the GoogleMaps API.",
    },
  ];

  return (
    <section className="projects">
      <h3 className="projects__title">Projects</h3>
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </section>
  );
}
