import React from "react";
import resume from "../media/Forest_McKinney_2024_Resume.pdf";

export default function ContactContent() {
  return (
    <div className="main-content">
      <span>
        <h3>Contact</h3>
      </span>
      <span>
        <p>
          Email (preferred):{" "}
          <a href="mailto:fwm27@drexel.edu">fwm27@drexel.edu</a>
        </p>
      </span>
      <span>
        <p>
          Phone: <a href="tel:+18083653326">+1 (808) 365-3326</a>
        </p>
      </span>
      <span>
        <p>
          Resume:{" "}
          <a href={resume} target="_blank">
            Open in browser
          </a>{" "}
          or{" "}
          <a href={resume} download="Forest_McKinney_Resume_2024.pdf">
            Download
          </a>
        </p>
      </span>
    </div>
  );
}
