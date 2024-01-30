import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Work from "./components/Work";
import ContactMe from "./components/ContactMe";
import Project from "./components/Project"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/work/:id" element={<Project />} />
      </Routes>
    </Router>
  );
}

export default App;
