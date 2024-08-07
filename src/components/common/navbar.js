import React from "react";
import "../../styles/Navbar.css";

export default function NavBar({ border }) {
  function buildNavBar() {
    return (
      <div className="headings-links-container">
        <a className="home-link" href="/">
          Home
        </a>
        <a className="about-link" href="/about">
          About Me
        </a>
        <a className="projects-link" href="/projects">
          Projects
        </a>
        <a className="contact-link" href="/contact">
          Contact
        </a>
        <a
          className="github-link"
          href="https://github.com/Jordunw/"
          target="_blank"
        >
          GitHub
        </a>
      </div>
    );
  }

  return border ? (
    <div className="headings-links-border">{buildNavBar()}</div>
  ) : (
    buildNavBar()
  );
}
