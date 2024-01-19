import { NavLink } from "react-router-dom";
import "./NavBar.scss";

export default function NavBar({ titles }) {
  const links = titles.map((data, i) => {
    return (
      <NavLink to={"/" + data.title} className="nav-bar__link" key={i}>
        {data.title}
      </NavLink>
    );
  });

  return <nav className="nav-bar">{links}</nav>;
}
