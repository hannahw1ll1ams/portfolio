import React from "react";
import '../../css/Sub-pages/event-posters.css'
import '../../css/text-shared.css'

import anniversaryBall from '../../images/rowing/anniversaryBall.png'
import springBall from '../../images/rowing/springBall.png'

export default function EventPostersPage() {
    return (
        <>
        <div className="anniversaryBallContainer">
                <div className="topText">
                    <h1>EVENT POSTERS</h1>
                    <h1>2022</h1>
                </div>
                <img className="postersTallImageWidth" src= {springBall} alt='anniversaryBall'/>
                <div className="bottomText">
                    <h1></h1>
                    <p className="imageKeyWords">creating posters and developing a consistent branding for Royal Chester Rowing Club events</p>
                </div>
        </div>

        <div className="springBallContainer">
                <div className="topText">
                    <h1></h1>
                    <h1>2023</h1>
                </div>
                <img className="postersWideImageWidth" src= {anniversaryBall} alt='springBall'/>
                <div className="bottomText">
                    <h1></h1>
                    <p className="imageKeyWords">vector shapes</p>
                </div>
        </div>

</>
    );
}