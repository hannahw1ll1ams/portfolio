import React from "react";
import '../../css/Sub-pages/salsa-political-speech.css'
import infographic from '../../images/infographic/salsaAsPoliticalSpeech.png'

export default function SalsaAsPoliticalSpeechPage() {
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
        </>
    );
}