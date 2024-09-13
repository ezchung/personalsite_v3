import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import ResumeLink from "./ResumeLink";

const NavBar: React.FC = () => {
  return (
    <nav className="NavBar">
      <Link to="/">
        Logo
      </Link>
      <Link to="/intro">
        About Me
      </Link>
      <Link to="/projects">
        Projects
      </Link>
      <Link to="/Resume">
        <ResumeLink />
      </Link>
      <Link to="/Contact">
        Contact
      </Link>
    </nav>
  );
}

export default NavBar;