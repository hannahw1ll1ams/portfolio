import React from "react";
import workers from '../../images/illustrations/seaViewWorkers.jpg'
import procrastinationOutline from '../../images/illustrations/procrastinationOutline.PNG'
import procrastinationColour from '../../images/illustrations/procrastinationColour.PNG'
import hugging from '../../images/illustrations/hugging.PNG'
import ines from '../../images/illustrations/ines.jpg'
import runners from '../../images/illustrations/runners.PNG'


import '../../css/Sub-pages/illustrations.css'
import '../../css/text-shared.css'

export default function IllustrationsPage() {
    return (
        <>
        <div className="whiteContainer">
                <div className="topText">
                    <h1>LIVE SKETCH</h1>
                    <h1>2023</h1>
                </div>
                <img className="liveSketchSingleImage" src= {workers} alt='workers'/>
                <div className="bottomText">
                    <h1></h1>
                    <p className="imageKeyWords">stormy sea and sky view working from coffee shop</p>
                </div>
        </div>

        <div className="procrastinationContainer">
                <div className="topText">
                    <h1></h1>
                    <h1>2023</h1>
                </div>
                <div className="imageContainer">
                    <img className="procrastination" src= {procrastinationOutline} alt='procrastinationOutline'/>
                    <img className="procrastination" src= {procrastinationColour} alt='loprocrastinationColourgo'/>
                </div>
                <div className="bottomText">
                    <h1></h1>
                    <p className="imageKeyWords">20 minute live sketch using procreate</p>
                </div>
        </div>

        <div className="portugalContainer">
            <div className="twoRunnersContainer">
                <div className="topText">
                     <h1></h1>
                       <h1>2021</h1>
                </div>
                <img className="halfSingleImage" src= {runners} alt='runners'/>
                <div className="bottomText">
                    <h1></h1>
                     <p className="imageKeyWords">experimenting with styles</p>
                </div>
            </div>

            <div className="inesContainer">
                <div className="topText">
                     <h1></h1>
                       <h1>2021</h1>
                </div>
                <img className="halfSingleImage" src= {ines} alt='ines'/>
                <div className="bottomText">
                    <h1></h1>
                     <p className="imageKeyWords">developing drawing through layers of pencil sketch, refine, colour, ink</p>
                </div>
            </div>
        </div>

        <div className="whiteContainer">
                <div className="topText">
                    <h1></h1>
                    <h1>2022</h1>
                </div>
                <img className="pictureSketch" src= {hugging} alt='hugging'/>
                <div className="bottomText">
                    <h1></h1>
                    <p className="imageKeyWords">picture sketch / focus on capturing essence of characters</p>
                </div>
        </div>

       </>
    );
}