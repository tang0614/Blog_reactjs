import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import Classes from "./About.module.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={Classes.About}>
   
        <div className={Classes.Container}>
          <p style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
            <strong>Something About Me</strong>

            <a href={window.location.origin + `/file/resume.pdf`} download="xinyu_tang_resume.pdf"><span style={{padding:"1rem"}}>Download Resume</span></a>
            
          </p>
          <p>
          I am a new computer science graduate who is excited to start a career in software development.
          My goal is to become a front-end developer, utilizing my full-stack coding skills and UI/UX design ability to gain as much experience as possible.
          </p>
          <p>
          I just got my MS degree in December 2020 from Northeastern University. 
          My previous internship experience inspired me to enter the field of software development.
          In the early of 2020, I got a six-month internship as a data scientist in a biotech company in Cambridge, MA. 
          During the internship, I successfully built two dashboards that provided insight about gene expression for scientists and facilitated their experimental design. 
          I was responsible for data fetching, preprocessing, development of the database and dashboards.
          </p>
          <p >
          Compared to the data management part of my job, 
          I was more interested in software development. 
          And I realized that my genuine interests lie in developing large-scale applications that provide an excellent user experience. 
          Therefore, I began to teach myself more about Javascript, React, Redux, NodeJS, Spring boot, etc., and have used these skills in a couple of big personal projects.
        </p>
        <p >
        To further refine my skills, I also took an advanced software development course in Fall 2020. 
        Together with my mathematics and psychology (I double majored in them in my undergraduate program!), 
        and all my experience in computer science is shaping who I am. I believe the combination of these different fields will bring more color to my future works.
        </p>
        </div>
     

  
    </div>
  );
};

export default About;
