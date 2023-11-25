import React from "react";
import frontLogo from '../../images/rowing/ldsLogoFront.png'
import backLogo from '../../images/rowing/ldsLogoBack.png'

import '../../css/Sub-pages/tshirt-design.css'

export default function TshirtDesignPage() {
    return (
    <>
        <div className="tshirtContainer">
            <div className="topText">
                <h1></h1>
                <h1>2022</h1>
            </div>
            <div className="tshirtImageContainer">
                <img className="appLogoDesign" src= {frontLogo} alt='procrastinationOutline'/>
                <img className="appLogoDesign" src= {backLogo} alt='loprocrastinationColourgo'/>
            </div>
            <div className="bottomText">
                <h1></h1>
                <p className="imageKeyWords">final design - monotone, front logo is a negative space reverse of the back logo</p>
            </div>
        </div>
    </>
    );
}