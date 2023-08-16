// import React from "react";

import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import Notes from "./pages/Notes";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NoteDetails from "./components/NoteDetails";
import ProjectDetails from "./components/ProjectDetails";

import "./App.css";

const HomePageWrapper = ({ children }) => (
  <>
    <Navbar />
    <div className="content-container">{children}</div>
  </>
);
const OtherPageWrapper = ({ children }) => (
  <>
    <Navbar />
    <div className="content-container">{children}</div>
  </>
);
const App = () => (
  <div className="page-container">
    <Routes>
      <Route
        exact
        path="/"
        element={
          <HomePageWrapper className="otherPageWrapper">
            <Home />
          </HomePageWrapper>
        }
      />
      <Route
        exact
        path="/contact"
        element={
          <OtherPageWrapper>
            <Contact />
          </OtherPageWrapper>
        }
      />
      <Route
        path="/notes"
        element={
          <OtherPageWrapper>
            <Notes />
          </OtherPageWrapper>
        }
      />
      <Route
        path="/notes/:noteId"
        element={
          <OtherPageWrapper>
            <NoteDetails />
          </OtherPageWrapper>
        }
      />
      <Route
        exact
        path="/projects"
        element={
          <OtherPageWrapper>
            <Projects />
          </OtherPageWrapper>
        }
      />
      <Route
        exact
        path="/projects/:projectName"
        element={
          <OtherPageWrapper>
            <ProjectDetails />
          </OtherPageWrapper>
        }
      />
    </Routes>
    <Footer />
  </div>
);

export default App;
