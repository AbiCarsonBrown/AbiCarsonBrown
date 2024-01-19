import "./styles/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Header from "./components/Header/Header.jsx";

function App() {
  const titles = [
    { title: "About" },
    { title: "Projects" },
    { title: "Contact" },
  ];

  return (
    <>
      <BrowserRouter>
        <Header titles={titles} />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
