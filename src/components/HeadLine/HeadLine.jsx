import "../HeadLine/HeadLine.scss";
import NavBar from "../NavBar/NavBar";

export default function HeadLine() {
  return (
    <header className="headline">
      <h1 className="headline__title">Abi Carson-Brown</h1>
      <h2 className="headline__subtitle">Software Engineer</h2>
      <NavBar />
    </header>
  );
}
