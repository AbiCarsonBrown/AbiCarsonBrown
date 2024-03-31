import "./styles/App.scss";
import NavBar from "./components/NavBar/NavBar.jsx";
import HeadLine from "./components/HeadLine/HeadLine.jsx";
import About from "./components/About/About.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";

function App() {
  const titles = [
    { title: "about" },
    { title: "projects" },
    { title: "contact" },
  ];

  return (
    <main className="app">
      {/* <NavBar titles={titles} /> */}
      <HeadLine />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
