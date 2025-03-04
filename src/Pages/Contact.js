
export const Contact = () => {

    return (
        <section className="section-contact">
            <h2 className="container-title">Contact Us</h2>

            <div className="contact-wrapper container">

                <form action="https://formspree.io/f/xzzbvevk" method="POST">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Name"
                        name="username"
                        required
                        autoComplete="off" />

                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Your email"
                        name="username"
                        required
                        autoComplete="off" />

                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Number"
                        name="username"
                        required
                        autoComplete="off" />


                    <textarea
                        className="form-control"
                        rows="10"
                        placeholder="Enter Your message"
                        name="message"
                        required
                        autoComplete="off" >
                    </textarea>

                    <button type="submit" value="send">Send</button>

                </form>

            </div>

        </section>
    )
}
