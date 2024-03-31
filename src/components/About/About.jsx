import "./About.scss";
import Stack from "../Stack/Stack";

export default function About() {
  return (
    <section className="about" id="about">
      <p className="about__content">
        Hi, I'm Abi, a Software Engineer with a unique journey. My background
        includes studying Mathematics at university and a rewarding 5-year
        tenure in Fashion Merchandising, primarily at ASOS. Following my time at
        ASOS, I ventured into other merchandising roles, but I yearned for a
        more challenging path.
        <br />
        <br />
        With a passion for problem-solving and a knack for diving into tasks
        headfirst, a friend introduced me to the world of Software Engineering.
        This sparked my interest, leading me to enrol in a BrainStation
        bootcamp. Now, with these new skills, both Front-End and Back-End, under
        my belt, I’m excited to apply what I have learned to real world
        projects. My mission is to bring joy to people's lives through
        innovative software solutions.
      </p>
      <Stack />
    </section>
  );
}
