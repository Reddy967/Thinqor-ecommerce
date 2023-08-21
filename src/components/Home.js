import React from "react";
import "../Styles/home.css";
import eco from "../assets/eco.mp4";

const Home = () => {
return(
    <div className="main">
        <video src={eco} speed={0.5} autoPlay loop muted />
    </div>
);
}

export default Home;