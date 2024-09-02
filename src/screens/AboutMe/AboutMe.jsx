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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quia
            placeat eos atque veniam voluptatum sapiente ipsum tempore iste,
            omnis cumque velit autem consectetur. Veritatis molestias ullam
            voluptas nostrum? Dolorum. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eum ipsam iusto suscipit tempore incidunt,
            sapiente consequatur nihil repellendus quasi beatae explicabo
            eveniet, voluptatem vitae quos recusandae minus, quia iure odio.
          </p>
        </div>
      </div>
    );
};

export default AboutMe;
