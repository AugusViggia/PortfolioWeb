import React from "react";
import "./AboutMe.css";
import person from "../../images/person.jpg"

function AboutMe() {
    return (
      <div className="about__container" id="about_me">
        <div>
          <img src={person} alt="person icon" />
        </div>
        <div className="about__text">
          <h1>ABOUT ME</h1>
          <p>
            I am a passionate Full Stack Web Developer with a strong foundation
            in both frontend and backend technologies. Currently pursuing a
            Bachelor's degree in Systems Engineering at UADE, I am committed to
            continuous learning and personal development. My goal is to stay at
            the forefront of technology, constantly acquiring new skills and
            applying them to real-world projects. I thrive on challenges and
            enjoy creating innovative solutions that not only meet client needs
            but also contribute to my growth as a developer. Whether working
            independently or as part of a team, I am always driven by a desire
            to deliver high-quality, scalable, and efficient code.
          </p>
          <p>
            In addition to my technical expertise, I am dedicated to building a
            strong professional network and collaborating with others in the
            tech community. I am always open to new opportunities that allow me
            to contribute my skills and knowledge, while also learning from
            others. Let's connect and create something amazing together!
          </p>
        </div>
      </div>
    );
};

export default AboutMe;
