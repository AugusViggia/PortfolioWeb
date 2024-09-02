import React from 'react'
import { ReactTyped } from "react-typed";
import "./Header.css";

function Header() {
    return (
        <div className="container" id='home'>
            <h1 className="title">What am I?</h1>
            <ReactTyped
                strings={[
                    " ",
                    "I'm a Full Stack Developer  ",
                    " ",
                    "Mobile and Web  ",
                    " ",
                    "Specialized in HTML, CSS, JavaScript and Python  ",
                    " ",
                    "Experienced with Next.js, React.js  ",
                    " ",
                    "React Native  ",
                    " ",
                    "Front-End abilities with Bootstrap and React-Bootstrap  ",
                    " ",
                    "Back-End with Node.js and Express.js  ",
                    " ",
                    "Database Management with PostgreSQL  ",
                    " ",
                    "Firebase  ",
                    " ",
                    "& GitHub  ",
                    " ",
                    " ",
                ]}
                typeSpeed={40}
                backSpeed={60}
                loop
            />
        </div>
    );
};

export default Header;
