import React from "react";
import '../css/aboutPage.css'
import profileImage from '../images/profilePicture.png'
import TechnologiesComponent from "../Components/Technologies";


export default function AboutPage() {

    return (
            <div className="aboutMe-container">
                <div className="titles">
                    <p className="bio">I am a developer with a passion for design. <br /> I combine these disciplines to deliver visually appealing, intuitive and high-quality digital experiences.</p>
                    <a target="_blank" className="mediaLink" href="https://medium.com/footasylum-tech/how-i-got-here-hannah-williams-software-engineer-7068c9216722">Blog post about my journey to becoming a Software Engineer</a>
                </div>
                <TechnologiesComponent />
            </div>
    );
}


