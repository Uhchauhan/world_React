
import React from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

import "./TestimonialSider.css";

import img7 from "../images/person_1.jpg"
import img8 from "../images/person_2.jpg"
import img9 from "../images/person_3.jpg"





const Testimonials = [

    {
        text:"Far far away, behind the word mountains, fa from the countries voklia and Consanantia, there live the blind text",
        name:"Roger Scott",
        position:"Marketing Manager",
        image: img7
    },

    {
        text:"Far far away, behind the word mountains, fa from the countries voklia and Consanantia, there live the blind text",
        name:"Roger Scott",
        position:"Marketing Manager",
        image: img8
    },
    
    {
        text:"Far far away, behind the word mountains, fa from the countries voklia and Consanantia, there live the blind text",
        name:"Roger Scott",
        position:"Marketing Manager",
        image: img9
    }

];


const TestimonialSider = () => {

    const setting = {

        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        nextArrow:<SampleNextArrow />,
        prevArrow:<SamplePrevArroe />,

        responsive:[
            {
                breakpoint: 768,
                setting:{
                    arrows: false,
                    dots:true
                }
            }
        ]
    };


    return(

        <div className="testmonia-slider">
            <Slider {...setting}>

            {Testimonials.map((testimonial,index) => (

                <div className="testimonial">
                    <p>{testimonial.text}</p>
                    <div className="testmonial-info">
                    <img src={testimonial.image} alt={testimonial.name} />
                    <div>
                        <h4>{testimonial.name}</h4>
                        <p>{testimonial.position}</p>
                    </div>
                    </div>
                </div>
            ))}

            </Slider>
        </div>

    )
};

const SampleNextArrow = (props) => {

    const {className, style, onClick} = props

    return(

        <div className={className}
            style={{...style, display:"block", background:"gray"}}
            onClick={onClick}
        />
    );
}



const SamplePrevArroe = (props) => {

    const {className, style, onClick} = props

    return(

        <div className={className}
            style={{...style, display:"block", background:"gray"}}
            onClick= {onClick}
        />
    );
}

export default TestimonialSider;