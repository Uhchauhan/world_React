
import React from "react";

import "./Profilecard.css"

import { FaMusic, FaPlane, FaFilm, FaFootballBall } from "react-icons/fa";

import img2 from "../images/about-1.jpg"



const Profilecard = () => {

    return (

        <div className="profile-card">
            <div className="profile-image">
                <img src={img2} alt="Profile" />
            </div>

            <div className="profile-info">
                <h2 className="section-title">MY INTRO</h2>
                <h1>About Me</h1>
                <p className="bio">
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit.
                </p>


                <div className="personal-info">

                    <div className="info-item">
                        <span className="label">Name:</span>
                        <span className="value">Uday Chauhan</span>
                    </div>

                    <div className="info-item">
                        <span className="label">Date Of Birth:</span>
                        <span className="value">January 24, 2002</span>
                    </div>

                    <div className="info-item">
                        <span className="label">Address:</span>
                        <span className="value">Ghatkopar West</span>
                    </div>


                    <div className="info-item">
                        <span className="label">Pincode :</span>
                        <span className="value">400070</span>
                    </div>

                    <div className="info-item">
                        <span className="label">Email::</span>
                        <span className="value">uchauhan728@gmail.com</span>
                    </div>

                    <div className="info-item">
                        <span className="label">Phone:</span>
                        <span className="value">+91 9653140070</span>
                    </div>

                </div>



                <div className="interests">

                    <div className="interests-item">
                        <FaMusic />
                        <span>Music</span>
                    </div>


                    <div className="interests-item">
                        <FaFilm />
                        <span>Movies</span>
                    </div>


                    <div className="interests-item">
                        <FaFootballBall />
                        <span>Sports</span>
                    </div>


                    <div className="interests-item">
                        <FaPlane />
                        <span>Travels</span>
                    </div>

                </div>

            </div>

        </div>

    )
};

export default Profilecard