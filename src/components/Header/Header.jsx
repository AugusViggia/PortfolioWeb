import React from 'react'
import { ReactTyped } from "react-typed";
import "./Header.css";

function Header() {
    return (
        <div className="container" id="home">
            <h1 className="title">Who I Am and My Skills</h1>
            <ReactTyped
                strings={[
                    " ",
                    "I'm a Full Stack Developer",
                    " ",
                    "With knowledge in Web and Mobile Development",
                    " ",
                    "Known languages: HTML, CSS, JavaScript, Python, and PHP",
                    " ",
                    "Frameworks I work with are Next.js, React, React Native, and Laravel",
                    " ",
                    "Experienced with Front-End libraries like Bootstrap",
                    " ",
                    "Back-End libraries: Node.js and Express.js",
                    " ",
                    "PostgreSQL",
                    " ",
                    "Firebase",
                    " ",
                    "Git",
                    " ",
                    "& GitHub.",
                    " ",
                    " ",
                ]}
                typeSpeed={40}
                backSpeed={60}
                loop
                className='strings'
            />
        </div>
    );
};

export default Header;
