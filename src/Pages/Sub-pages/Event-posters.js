import React from "react";
import '../../css/Sub-pages/event-posters.css'

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
                <img className="singleImageWidth" src= {springBall} alt='anniversaryBall'/>
                <div className="bottomText">
                    <h1></h1>
                    <p className="imageKeyWords">developing consistent branding across events for Royal Chester</p>
                </div>
        </div>

        <div className="springBallContainer">
                <div className="topText">
                    <h1></h1>
                    <h1>2023</h1>
                </div>
                <img className="singleImageWidth" src= {anniversaryBall} alt='springBall'/>
                <div className="bottomText">
                    <h1></h1>
                    <p className="imageKeyWords"></p>
                </div>
        </div>

</>
    );
}