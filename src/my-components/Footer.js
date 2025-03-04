
import React from "react";

import "./Footer.css"

const Footer = () => {

    return (

        <footer className="footer">
            <div className="footer-conatiner">
                <div className="footer-section">Quick Links
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Service</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p>Email: uchauhan728@gmail.com</p>
                    <p>Phone: +91 9653140070</p>
                </div>

            </div>


            <div className="footer-bottom">
                <p>&copy; 2024 Company. All right reserved.</p>
            </div>
        </footer>

    )

};

export default Footer;