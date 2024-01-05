import "./Home.scss";
// import Container from "../../components/Container/Container";
// import TitleBox from "../../components/TitleBox/TitleBox";
import BubbleContainer from "../../components/BubbleContainer/BubbleContainer";
// import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="home">
      {/* <TitleBox title="Abi Carson-Brown" />
      <Link to="/about">
        <Container title="About" />
      </Link>
      <Link to="/projects">
        <Container title="Projects" />
      </Link>
      <Link to="/contact">
        <Container title="Contact" />
      </Link> */}
      <BubbleContainer titles={["About", "Projects", "Contact"]} />
    </main>
  );
}
