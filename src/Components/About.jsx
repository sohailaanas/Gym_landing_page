import React from "react";
import aboutImage from '../images/about.webp'

function About() {
    return ( 
        <div id="about">
            <div className="about-image">
                <img src={aboutImage} alt="" />
            </div>
            <div className="about-text">
                <h1>LEARN MORE ABOUT US </h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores eum aut laborum quasi ullam exercitationem officiis cupiditate ut vel quisquam! Nisi saepe accusamus suscipit blanditiis.</p>
                <button>READ MORE</button>
            </div>
        </div>
     );
}

export default About;