import "./Stack.scss";
import StackCarousel from "../StackCarousel/StackCarousel";

export default function Stack() {
  return (
    <section className="stack">
      <h3 className="stack__title">My Tech Stack </h3>
      <StackCarousel />
    </section>
  );
}
