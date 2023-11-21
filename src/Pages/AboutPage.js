import React from "react";
import '../css/aboutPage.css'
import profileImage from '../images/profilePicture.png'
import TechnologiesComponent from "../Components/Technologies";


export default function AboutPage() {

    return (
        <div>
            <div className="aboutMe-container">
                <div className="titles">
                    <h1>HANNAH WILLIAMS</h1>
                    <h1>LONDON, UK</h1>
                </div>
                <div className="aboutMe-information">
                    <img className="profile-image" src= {profileImage} alt='procprofileImagereatswifteIcon'/>
                    <div className="info">
                        <h2 className="bio">I am a developer with a passion for design. I combine these disciplines to deliver visually appealing, intuitive and high-quality digital experiences. </h2>
                        <p className="description">I approach both design and coding in the same way, able to adapt my approaches and processes across projects and languages. Combining my knowledge of what the technology is capable of with the design goals, I can maximise the potential of outcomes closing the disconnect that can exist between the two disciplines.</p>
                    </div>
                    
                </div>
                   
                
            </div>
            <TechnologiesComponent />
        </div>

    );
}


