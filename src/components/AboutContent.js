import React from "react";
import resume from "../media/Forest_McKinney_2024_Resume.pdf";

export default function AboutContent() {
  return (
    <div className="main-content">
      <h3>About Me</h3>
      <p>
        I am a third-year computer science major at Drexel University in
        Philadelphia, PA, on a 5 year program that includes 18 months of{" "}
        <a href="https://drexel.edu/academics/co-op" target="_blank">
          cooperative education
        </a>
        , where I alternate classes and full-time work over 6 month periods. I
        will graduate in 2027 with a BS in Computer Science and 2 years of total
        work experience in software development and similar fields.
      </p>
      <p>
        I have a passion for object-oriented programming, having worked on
        various personal projects over the years - particularly game development
        in C++. Alongside this, smaller projects of mine include simple,
        text-based programs and scripts to automate work or assist me in
        studies, creating mods/plugins for games such as Minecraft, building
        Discord bots, D&D character generators, and more.
      </p>
      <p>
        Outside of programming, my hobbies include cooking and baking, playing
        basketball and lacrosse, and spending time outdoors hiking, camping, and
        backpacking. I am currently working towards a proficiency certificate in
        Japanese, which may extend to a minor.
      </p>
      <p>
        I currently work part-time at Apex Fintech Solutions as a full stack
        software developer (Sept 2023 -- Present), who extended my job offer
        once my co-op period ended. I am seeking new work for my next co-op this
        fall (beginning Sept 23, 2024) in software and/or application
        development. If you are interested in hiring me in related fields,
        please take a look at{" "}
        <a href={resume} target="_blank">
          my resume
        </a>
        .
      </p>
    </div>
  );
}
