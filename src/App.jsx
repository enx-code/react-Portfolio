import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Work from "./components/Work";
import ContactMe from "./components/ContactMe";
import Success from "./components/Success";
import ProjectDetails from './components/ProjectDetails';

const routerBasename =
  import.meta.env.BASE_URL === "/"
    ? "/"
    : import.meta.env.BASE_URL.replace(/\/$/, "");

function RedirectHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get("redirect");

    if (!redirect) {
      return;
    }

    navigate(`/${redirect}`, { replace: true });
  }, [navigate]);

  return null;
}

function App() {
  return (
    <Router basename={routerBasename}>
      <RedirectHandler />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/success" element={<Success />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:projectId" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
