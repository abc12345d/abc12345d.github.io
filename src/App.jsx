// import React from "react";

import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import Notes from "./pages/Notes";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NoteDetails from "./components/NoteDetails";

import "./App.css";

const App = () => (
  <div className="page-container">
    <Navbar />

    <div className="content-container">
      <Routes>
        <Route exact path="/" element={<></>} />
        <Route exact path="projects" element={<Projects />} />
        <Route exact path="about" element={<About />} />
        <Route exact path="contact" element={<Contact />} />

        <Route path="notes" element={<Notes />} />
        <Route path="notes/:noteId" element={<NoteDetails />} />
      </Routes>
    </div>

    <Footer />
  </div>
);

export default App;
