import React from "react";
import '../../css/Sub-pages/app-design.css'
import '../../css/text-shared.css'
import requestsLogo from '../../images/appDesign/requestsAppLogo.png'
import selfServeLogo from '../../images/appDesign/selfServeLogo.png'

export default function AppDesignsPage() {
    return (
        <>
        <div className="appDesignContainer">
                <div className="topText">
                    <h1>APP DESIGN</h1>
                    <h1>2023</h1>
                </div>
                <div className="logoImageContainer">
                    <img className="appLogoDesign" src= {requestsLogo} alt='requestsLogo'/>
                    <img className="appLogoDesign" src= {selfServeLogo} alt='selfServeLogo'/>
                </div>
                <div className="bottomText">
                    <h1>PROCESS</h1>
                    <p className="imageKeyWords">vector drawing / app logo design</p>
                </div>
        </div>
        </>
    );
}