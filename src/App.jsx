import "./styles/App.scss";
import NavBar from "./components/NavBar/NavBar.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";

function App() {
  const titles = [
    { title: "home" },
    { title: "about" },
    { title: "projects" },
    { title: "contact" },
  ];

  return (
    <div className="app">
      <main>
        <NavBar titles={titles} />
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
