import "./styles/App.scss";
import NavBar from "./components/NavBar/NavBar.jsx";
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
    <div className="app">
      <main>
        {/* <NavBar titles={titles} /> */}
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
