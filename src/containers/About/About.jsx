import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import Classes from "./About.module.css";

const About = () => {
  return (
    <div className={Classes.About}>
      <div className={Classes.Container}>
        <h3>Welcome !</h3>
        <p
          style={{
            fontSize: "14px",
            fontFamily: "inherit",
            lineHeight: "25px",
          }}
        >
          I’m so happy you’re here. Grab a cookie, take a seat, and let me
          introduce myself. I’m Sally. I’m a baker, blogger, author,
          photographer, and well-known lover of sprinkles. I’ve been in the
          kitchen for most of my life. From a very young age, I watched my mom
          and grandma work their baking magic, and once I picked up my first
          mixing spoon, I was hooked! I do most of my baking in Maryland with my
          husband (and number 1 taster), Kevin, and our beautiful daughter,
          Noelle. Of course, our family wouldn’t be complete without our two
          rescue dogs, Jude and Franklin. Baking has always been a welcome
          creative release for me (the warm cookies are a definite bonus!), and
          I’m blessed I can call it my career. When I’m not in the kitchen, I
          love running, hiking with my dogs, vacations at the lake, and
          experiencing all the exciting firsts with my baby girl. Life is good!
        </p>
      </div>
    </div>
  );
};

export default About;
