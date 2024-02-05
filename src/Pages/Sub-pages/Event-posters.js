import React from "react";
import '../../css/Sub-pages/event-posters.css'
import '../../css/text-shared.css'

import anniversaryBall from '../../images/rowing/anniversaryBall.png'
import springBall from '../../images/rowing/springBall.png'

export default function EventPostersPage() {
    return (
        <>
        <p className="description">
            Created posters and developed a consistent branding for Royal Chester Rowing Club events
        </p>
        <div className="anniversaryBallContainer">
                <div className="topText">
                    <h1>EVENT POSTERS</h1>
                    <h1>2022</h1>
                </div>
                <img className="postersTallImageWidth" src= {springBall} alt='anniversaryBall'/>
                <div className="bottomText">
                    <p className="imageKeyWords"></p>
                    <h1></h1>
                </div>
        </div>

        <div className="springBallContainer">
                <div className="topText">
                    <h1></h1>
                    <h1>2023</h1>
                </div>
                <img className="postersWideImageWidth" src= {anniversaryBall} alt='springBall'/>
                <div className="bottomText">
                    <p className="imageKeyWords"></p>
                    <h1></h1>
                </div>
        </div>

</>
    );
}