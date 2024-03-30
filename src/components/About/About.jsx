import "./About.scss";
import Intro from "../Intro/Intro";

export default function About() {
  return (
    <section className="about">
      <div className="about__container">
        <h1 className="about__title">Abi Carson-Brown</h1>
        <h2 className="about__subtitle">Software Engineer</h2>
        <Intro />
        <section className="stack">
          <h3 className="stack__title">Languages/skills: </h3>
          {/* <ul className="stack__list">
          <li>HTML5</li>
          <li>CSS</li>
          <li>Sass</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Document Object Model (DOM)</li>
          <li>OOP</li>
          <li>APIs</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>Web APIs</li>
          <li>User Authentication</li>
          <li>OAuth</li>
          <li>MySQL</li>
          <li>Knex</li>
          <li>Heroku</li>
          <li>GitHub</li>
          <li>Agile</li>
          <li>Jest</li>
          <li>MS Excel</li>
          <li>SquareSpace</li>
          <li>Jira</li>
          <li>Vite</li>
        </ul> */}
        </section>
      </div>
    </section>
  );
}
