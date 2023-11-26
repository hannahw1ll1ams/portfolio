import React from "react";
import '../css/aboutPage.css'
import profileImage from '../images/profilePicture.png'
import TechnologiesComponent from "../Components/Technologies";


export default function AboutPage() {

    return (
            <div className="aboutMe-container">
                <div className="titles">
                    <p className="bio">I AM A DEVELOPER WITH A PASSION FOR DESIGN. <br /> I COMBINE THESE DISCIPLINES TO DELIVER VISUALLY APPEALING, INTUITIVE AND HIGH-QUALITY DIGITAL EXPERIENCES. </p>
                    <a target="_blank" className="mediaLink" href="https://medium.com/footasylum-tech/how-i-got-here-hannah-williams-software-engineer-7068c9216722">Blog post about my journey to becoming a Software Engineer</a>
                </div>
                <TechnologiesComponent />
            </div>
    );
}


