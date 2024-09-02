import React from 'react'
import { techs } from '../../helpers/techs'
import './Technologies.css'

function Technologies() {
    return (
        <div className="technologies__container" id='technologies'>
            <div>
                <h1 style={{ textAlign: "center" }}>
                    Technologies I've worked with
                </h1>
            </div>
            <div className="tech__cards__container">
                {techs.map((e, idx) => {
                    return (
                        <div key={idx} className="tech__card">
                            <span style={{ margin: "5px", fontSize: "2.5rem", textAlign: "center" }}>
                                {e.name}
                            </span>
                            <img
                                alt='tech-icon'
                                src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${e.iconName}/${e.iconName}-original.svg`}
                                style={{ width: "120px", height: "120px" }}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Technologies
