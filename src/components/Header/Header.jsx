import { NavLink } from "react-router-dom";
import "./Header.scss";

export default function Header({ titles }) {
  const children = titles.map((data, i) => {
    return (
      <NavLink className="header__link" key={i}>
        {data.title}
      </NavLink>
    );
  });

  return <header className="header">{children}</header>;
}
