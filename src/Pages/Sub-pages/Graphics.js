import React from "react";
import '../../css/Sub-pages/graphics.css'
import '../../css/text-shared.css'

import infographic from '../../images/infographic/salsaAsPoliticalSpeech.png'
import getWell from '../../images/infographic/getWellGraphic.png'

export default function GraphicsPage() {
    return (
        <>
        <p className="description">
            A collection of miscellaneous graphics
        </p>
        <div className="salsaSpeechContainer">
                <div className="topText">
                    <h1>SALSA AS POLITICAL SPEECH</h1>
                    <h1>2017</h1>
                </div>
                <img className="salsaImageWidth" src= {infographic} alt='infographic'/>
                <div className="bottomText">
                    <p className="imageKeyWords">Infographic deconstructing a political speech between Hilary Clinton and Donald Trump and mapping out the power dynamics on the grid based on the language/data each speaker used.</p>
                    <h1></h1>
                </div>
        </div>
        <div className="keepingToesCrossed">
                <div className="topText">
                    <h1>KEEPING OUR TOES CROSSED</h1>
                    <h1>2023</h1>
                </div>
                <img className="toesImageWidth" src= {getWell} alt='getWell'/>
                <div className="bottomText">
                    <p className="imageKeyWords">Card design / get well</p>
                    <h1></h1>
                </div>
        </div>
        </>
    );
}