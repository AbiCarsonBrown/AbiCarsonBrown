import "./NavBar.scss";

export default function NavBar({ titles }) {
  const links = titles.map((data, i) => {
    return <a key={i}>{data.title}</a>;
  });

  return <nav className="nav-bar">{links}</nav>;
}
