import React from "react";
import '../css/aboutPage.css'
import csharp from '../images/technologyIcons/c#.png'
import figma from '../images/technologyIcons/figma.png'
import illustrator from '../images/technologyIcons/illustrator.png'
import indesign from '../images/technologyIcons/indesign.png'
import javascript from '../images/technologyIcons/javascript.png'
import procreate from '../images/technologyIcons/procreate.png'
import react from '../images/technologyIcons/react.png'
import swift from '../images/technologyIcons/swift.png'
import swiftUI from '../images/technologyIcons/swiftui.png'
import profileImage from '../images/profilePicture.png'
import TechnologiesComponent from "../Components/Technologies";


export default function AboutPage() {

    return (
        <div>
            <div className="aboutMe-container">
                <div className="titles">
                    <h1>Hannah Williams</h1>
                    <h1>London, UK</h1>
                </div>
                <div className="aboutMe-information">
                    <img className="profile-image" src= {profileImage} alt='procprofileImagereatswifteIcon'/>
                    <div className="info">
                        <h2 className="bio">I am a developer with a passion for design. i combine these disciplines to deliver visually appealing, intuitive and high-quality digital experiences. </h2>
                        <p className="description">I approach both design and coding in the same way, able to adapt my approaches and processes across projects and languages. Combining my knowledge of what the technology is capable of with the design goals, I can maximise the potential of outcomes closing the disconnect that can exist between the two disciplines.</p>
                    </div>
                    
                </div>
                   
                
            </div>
            <TechnologiesComponent />
        </div>

    );
}


