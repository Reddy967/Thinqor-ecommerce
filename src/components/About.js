import React from "react";
import "../Styles/about.css";
import cycle from "../assets/about.JPG";
import CarouselComponent from "./CarouselComponent";

const About = () => {
return(
    <div className="header">
        <div className="header-content">
            <h2 style={{color:'orange'}}>The World is Yours</h2>
            <h2 style={{color:'black'}}>No Compromise</h2>
            <p>Performance and design were the key words during the conception of this <br/>super eBike. No compromises were made to keep the pleasure of driving 
               <br/>despite constraints.</p>
        </div>
        <div className="header-image1">
            <img src="https://ecoautomotive.evive-micromobility.com/web_editor/image_shape/website.s_text_image_default_image/web_editor/float/flt_square_3.svg?c1=o-color-1&c5=o-color-5" />
        </div>
        <div className="header-image2">
            <img src={cycle} width={500} height={400}/>
        </div>
        <div className="header-container">
            <h2 style={{color:'orange'}}>A greener lifestyle</h2>
            <h1 style={{color:'black'}}>Electric Driving</h1>
            <p>At Eco-Automotive, we have a passion for creating innovative<br/> electric cycles that are environmentally friendly and efficient.<br/> Our mission is to provide high-quality e-bikes that are affordable<br/> and accessible to everyone. We take pride in our commitment<br/> to sustainable transportation and reducing our carbon footprint.<br/> Our electric cycles are designed with advanced features such<br/> as pedal assist, powerful motors, and long-lasting batteries <br/>to provide a comfortable and enjoyable ride. We are dedicated<br/> to providing exceptional customer service and support,<br/> ensuring that every customer has a positive experience with our<br/> products. Thank you for choosing Eco-Automotive powered<br/> by eVive as your go-to electric cycle.</p>
        </div>
    </div>
  
);
}

export default About;
