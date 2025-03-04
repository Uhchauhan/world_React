
import React from "react";

import "./Header1.css"

import img1 from "../images/bg_1.jpg"


const Header1 = () => {

    return(
        
        <header className="header-container">
            <div className="content">
                <h3>HELLO! THIS IS CLYDE</h3>
                <h1>
                    I am a <span>Front-End</span>  Developer
                </h1>

                <div className="buttons">
                    <button className="hire-me">Hire Me</button>
                    <button className="download-cv">Download CV</button>
                </div>
            </div>

            <div className="image-container">

                <img src={img1} alt="image" />

            </div>

        </header>
    )
};


export default Header1;