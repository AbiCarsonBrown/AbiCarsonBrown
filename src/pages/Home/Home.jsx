import "./Home.scss";
import Container from "../../components/Container/Container";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="home">
      <h1>Abi Carson-Brown</h1>
      <Link to="/about">
        <Container title="About" />
      </Link>
      <Link to="/projects">
        <Container title="Projects" />
      </Link>
      <Link to="/contact">
        <Container title="Contact" />
      </Link>
    </main>
  );
}
