import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Intro from "./Intro";
import Landing from "./Landing";
import NavBar from "./Navbar";
import ProjectsSection from "./ProjectsSection";
import ResumeLink from "./ResumeLink";

const Router:React.FC = () => {
    return (
        <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/projects" element={<ProjectsSection/>} />
          {/* Will change to projects page. where all projects are shown */}
          <Route path="/intro" element={<Intro/>} />
          {/* need to add resume link here as well */}
          <ResumeLink />
          <Route path="/" element={<Landing/>} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default Router;