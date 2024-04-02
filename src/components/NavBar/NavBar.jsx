import { NavLink } from "react-router-dom";
import "./NavBar.scss";

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <NavLink to="/" className="nav-bar__link nav-bar__link--about">
        About
      </NavLink>
      <NavLink to="/projects" className="nav-bar__link nav-bar__link--projects">
        Projects
      </NavLink>
    </nav>
  );
}
