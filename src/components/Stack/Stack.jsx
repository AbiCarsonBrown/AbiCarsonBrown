import "./Stack.scss";
import StackCarousel from "../StackCarousel/StackCarousel";

export default function Stack() {
  return (
    <section className="stack">
      <h3 className="stack__title">My Tech Stack </h3>
      <StackCarousel />
      {/* <ul className="stack__list">
    <li>Document Object Model (DOM)</li>
    <li>OOP</li>
    <li>APIs</li>
    <li>Web APIs</li>
    <li>User Authentication</li>
    <li>OAuth</li>
    <li>Agile</li>
  </ul> */}
    </section>
  );
}
