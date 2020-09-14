import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import Classes from "./About.module.css";

const About = () => {
  return (
    <div>
      <div className={Classes.About}>
        <div className={Classes.Image}>
          <img src={window.location.origin + `/image/about.jpg`} />
        </div>

        <div className={Classes.Container}>
          <h3>Something About Me</h3>
          <p>
            I am going to graduate in December 2020 with a degree of data
            science from Northeastern University, and my last internship
            experience inspired me to enter the field of web development.
          </p>
          <p>
            In the early of 2020, I got a six-month internship as a
            bioinformatic engineer in a bio-tech company in Cambridge, MA.
            During the internship I successfully built two dashboards that
            provide insight about gene expression for scientists, and
            facilitated their experimental design. I was responsible for data
            fetching, preprocessing, development of analytical engines, and
            creation of dashboards. Compared to the data management part of my
            job, I was more interested in how to code in R to build a good UX/UI
            dashboard. Although I knew little about the language in the
            beginning, I was intrinsically motivated to learn all the new
            skills.
          </p>
        </div>
      </div>
      <div className={Classes.About}>
        <p className={Classes.Container}>
          From the last internship, I realized that my genuine interests lie in
          developing large-scale web applications that provide excellent user
          experience. Therefore, I began to teach myself more about Javascript,
          React, Redux, NodeJS etc. in my spare time and have used these skills
          in a number of personal projects.
        </p>
        <p className={Classes.Container}>
          In order to further refine my skills, I also took an advanced web
          development course in Fall 2020. Together with my background in
          mathematics and psychology (I double majored them in my undergraduate
          program!), and all my experience is shaping who I am, just like
          different color spectrums make up the light.
        </p>
      </div>
    </div>
  );
};

export default About;
