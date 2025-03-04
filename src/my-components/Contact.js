   
import React from "react";

import "./Contact.css";


const Contact = () => {

    return (

        <div className="contact">
            <h2>Contact Us</h2>
            <form className="contact-form" action="https://formspree.io/f/xzzbvevk" method="POST">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" rows="4" required></textarea>
                </div>

                <button type="submit">Send</button>

            </form>
        </div>
    )
};


export default Contact

