import React from "react";
import '../../css/Sub-pages/omnichannel.css'
import '../../css/text-shared.css'
import omnichannelGraphic from '../../images/infographic/omnichannel-06.png'

export default function OmnichannelInfographicPage() {
    return (
        <>
        <p className="description">
                    Illustrating a imagined omni-channel shopping experience underpinned with a unified basket and central source of truth for Customer, Product and Orders.
                </p>
        
        <div className="omnichannelContainer">
                <div className="topText">
                    <h1>‘OMNI-CHANNEL’ RETAIL VISION INFOGRAPHIC</h1>
                    <h1>2023</h1>
                </div>
                <img className="omnichannelWidth" src= {omnichannelGraphic} alt='omnichannelGraphic'/>
                <div className="bottomText">
                    <h1></h1>
                    <p className="imageKeyWords">vector drawing / collaboration</p>
                </div>
        </div>
        </>
    );
}