import "./Projects.scss";

export default function Projects() {
  return (
    <section className="projects">
      <h3 className="projects__title">Projects</h3>
      <div className="project">
        <a
          className="project__link"
          target="_blank"
          href="https://coffeebeen.abicarsonbrown.com"
        >
          CoffeeBeen
        </a>
        <p className="project__description">
          Bringing together front-end and back-end development skills to create
          a web application to find and review coffee shops around London,
          illustrated using the GoogleMaps API.
        </p>
      </div>
    </section>
  );
}
