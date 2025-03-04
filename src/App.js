
import React from "react";
import Navbar from "./my-components/Navbar";
import Header1 from "./my-components/Header1";
import Counter from "./my-components/Counter";
import Profilecard from "./my-components/Profilecard";
import SkillsSection from "./my-components/SkillsSection";
import OurProject from "./my-components/OurProject";
import TestimonialSider from "./my-components/TestimonialSider";
import Contact from "./my-components/Contact";
import Footer from "./my-components/Footer";

import "./App.css"




function App() {

    return(
        <div className="App">
            <Navbar />
            <Header1 />
            <Counter />
            <Profilecard />
            <SkillsSection />
            <OurProject />
            <TestimonialSider />
            <Contact />
            <Footer />  
        </div>
    );
};


export default App;


