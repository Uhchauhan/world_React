
import React, { useState, useEffect } from "react";

import { useInView } from "react-intersection-observer"

import "./SkillsSection.css"


const Skillcard = ({ skill, percentage, Lastweek, LastMonth }) => {

    const [progress, setprogress] = useState(0);

    const {ref, inView} = useInView({

        triggerInce: true,
        threshold: 0.1,
    });

    useEffect(() => {

        if (inView) {
            const timer = setInterval(() => {
                if (progress < percentage) {
                    setprogress(prevProgress => Math.min(prevProgress + 1, percentage));
                }
                else
                {
                    clearInterval(timer);
                }
            }, 20);

            return () => clearInterval(timer);
        }

    }, [progress, percentage, inView]);

    return (

        <div ref={ref} className="skill-card">
            <h3>{skill}</h3>
            <div className="progress-circle" style={{ '--percentage': progress }}>
                <span className="percentage">{progress}%</span>
            </div>

            <div className="skill-stats">

                <div className="stat">
                    <span className="stat-value">{Lastweek}</span>
                    <span className="stat-label">Last week</span>
                </div>

                <div className="stat">
                    <span className="stat-value">{LastMonth}</span>
                    <span className="stat-label">Last Month</span>
                </div>

            </div>

        </div>

    );

};



const SkillsSection = () => {

    const skills = [

        { skill: "CSS", percentage: 95, Lastweek: 28, LastMonth: 60 },
        { skill: "HTML", percentage: 98, Lastweek: 28, LastMonth: 60 },
        { skill: "React", percentage: 68, Lastweek: 28, LastMonth: 60 }

    ];

    return (

        <div className="skills-section">
            <h4 className="section-subtitle">SKILLS</h4>
            <h2 className="section-title">My Skills</h2>
            <p className="section-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>

            <div className="skills-container">
                {skills.map((skill, index) => (

                    <Skillcard key={index} {...skill} /> 

                ))}
            </div>

        </div>
    );

};


export default SkillsSection;
