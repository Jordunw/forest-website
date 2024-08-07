import React, { Component, useEffect } from "react";
import ImageSlider from "./common/imageslider";

// TODO: finish this
// Requires: Project name, href, [images]
class Project extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a href={this.props.link}>
        <div className="project-item">
          <span>
            <div className="project-item-leftcontent">
              <h4>{this.props.title}</h4>
              <p>{this.props.desc}</p>
            </div>
            <div className="project-item-rightcontent">
              <ImageSlider images={this.props.images}></ImageSlider>
            </div>
          </span>
        </div>
      </a>
    );
  }
}

function createProjectItem() {
  return (
    <ol>
      <li>
        <a href="/projects/synthesizer">Handheld Synthesizer</a>
      </li>
      <li></li>
    </ol>
  );
}

export default function ProjectsContent() {
  useEffect(() => {
    document.title = "Projects - Forest McKinney";
  }, []);
  return (
    <div className="main-content">
      <h3>Projects</h3>Under construction...
    </div>
  );
}
