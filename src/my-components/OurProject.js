
import React from "react";

import "./OurProject.css"

import img3 from "../images/work-1.jpg"
import img4 from "../images/work-2.jpg"
import img5 from "../images/work-3.jpg"
import img6 from "../images/work-6.jpg"



const project = [

    { image:  img3 , alt: "Work1-image" },
    { image:  img4 , alt: "Work2-image" },
    { image:  img5 , alt: "Work3-image" },
    { image:  img6 , alt: "Work6-image" },


];


const OurProject = () => {

    return (

        <div className="OurProjects">
            <h2>Our Project</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>

            <div className="project-grid">
                {project.map((project, index) => (

                    <div key={index} className="project">
                        <img src={project.image} alt={project.alt} />
                    </div>

                ))}
            </div>
        </div>

    )
};

export default OurProject;





