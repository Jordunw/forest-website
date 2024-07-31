import React from "react";
import "../../styles/Navbar.css";

export default function NavBar() {
    return(
        <div class="headings-links-container">
            <a class="home-link" href="/">Home</a>
            <a class="about-link" href="/about">About Me</a>
            <a class="projects-link" href="/projects">Projects</a>
            <a class="contact-link" href="/contact">Contact</a>
            <a class="github-link" href="https://github.com/Jordunw/" target="_blank">GitHub</a>
        </div>
    );
}