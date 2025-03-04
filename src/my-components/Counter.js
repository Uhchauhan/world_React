
import React, { useState, useEffect } from "react";

import { FaBriefcase, FaSmile, FaCoffee, FaChartLine } from "react-icons/fa";

import "./Counter.css"


const Counter = () => {

    const [counts, setCount] = useState({

        Projects: 0,
        Clients: 0,
        Coffee: 0,
        experience: 0,

    });

    const targets = {

        Projects: 750,
        Clients: 568,
        Coffee: 478,
        experience: 780,
    }

    useEffect(() => {

        const interval = setInterval(() => {

            setCount(perCounts => ({

                Projects: Math.min(perCounts.Projects + 5, targets.Projects),
                Clients: Math.min(perCounts.Clients + 5, targets.Clients),
                Coffee: Math.min(perCounts.Coffee + 5, targets.Coffee),
                experience: Math.min(perCounts.experience + 5, targets.experience),

            }));

        }, 20);

        return () => clearInterval(interval);

    }, []);

    const items = [

        { icon: FaBriefcase, label: "PROJECTS COMPLETE", value: counts.Projects },
        { icon: FaSmile, label: "HAPPY CLIENTS", value: counts.Clients },
        { icon: FaCoffee, label: "CUPS OF COFFEE", value: counts.Coffee },
        { icon: FaChartLine, label: "YEARS EXPERIENCE", value: counts.experience },

    ]

    return(

        <div className="counter-container">

            {items.map((item ,index) => (

                    <div key={index} className="counter-item">

                    <item.icon className="counter-icon" />

                    <div className="counter-value">{item.value}</div>

                    <div className="counter-label">{item.label}</div>

                    </div>

                ))}
            

        </div>

    )



};

export default Counter;

