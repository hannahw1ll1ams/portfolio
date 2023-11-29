import React from "react";
import '../../css/Sub-pages/graphics.css'
import '../../css/text-shared.css'

import infographic from '../../images/infographic/salsaAsPoliticalSpeech.png'
import getWell from '../../images/infographic/getWellGraphic.png'

export default function GraphicsPage() {
    return (
        <>
        <div className="salsaSpeechContainer">
                <div className="topText">
                    <h1>SALSA AS POLITICAL SPEECH</h1>
                    <h1>2017</h1>
                </div>
                <img className="singleImageWidth" src= {infographic} alt='infographic'/>
                <div className="bottomText">
                    <h1></h1>
                    <p className="imageKeyWords">data / translation / deconstruction</p>
                </div>
        </div>
        <p className="description">
            Infographic deconstructing a political speech between Hilary Clinton and Donald Trump and mapping out the power dynamics on the grid based on the language each speaker used. 
        </p>
        <div className="keepingToesCrossed">
                <div className="topText">
                    <h1>KEEPING OUR TOES CROSSED</h1>
                    <h1>2023</h1>
                </div>
                <img className="singleImageWidth" src= {getWell} alt='getWell'/>
                <div className="bottomText">
                    <h1></h1>
                    <p className="imageKeyWords">card design / get well</p>
                </div>
        </div>
        </>
    );
}