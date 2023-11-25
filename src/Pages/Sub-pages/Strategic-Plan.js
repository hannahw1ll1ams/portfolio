import React from "react";
import finalVersion from '../../images/rowing/strategicPlan3.PNG'
import version1 from '../../images/rowing/strategicPlan1.jpeg'
import version2 from '../../images/rowing/strategicPlan2.png'
import planPillars from '../../images/rowing/planPillars.png'

import '../../css/Sub-pages/strategic-plan.css'

export default function StrategicPlanPage() {
    return (
       <>
        <div className="finalVersionContainer">
                <div className="topText">
                    <h1></h1>
                    <h1>2022</h1>
                </div>
                <img className="portraitWidth" src= {finalVersion} alt='finalVersion'/>
                <div className="bottomText">
                    <h1></h1>
                    <p className="imageKeyWords">iterations / collaboration / communication / styles / procreate / vectors</p>
                </div>
        </div>

       <div className="version1Container">
                <div className="topText">
                    <h1></h1>
                    <h1>2022</h1>
                </div>
                <img className="portraitWidth" src= {version1} alt='version1'/>
                <div className="bottomText">
                    <h1></h1>
                    <p className="imageKeyWords">consistent branding</p>
                </div>
        </div>

        <div className="version2Container">
                <div className="topText">
                    <h1></h1>
                    <h1>2022</h1>
                </div>
                <img className="portraitWidth" src= {version2} alt='version2'/>
                <div className="bottomText">
                    <h1></h1>
                    <p className="imageKeyWords">consistent branding</p>
                </div>
        </div>

        <div className="planPilarsContainer">
                <div className="topText">
                    <h1>STRATEGIC PLAN PILLARS</h1>
                    <h1>2022</h1>
                </div>
                <img className="landscapeWidth" src= {planPillars} alt='version1'/>
                <div className="bottomText">
                    <h1></h1>
                    <p className="imageKeyWords">consistent branding</p>
                </div>
        </div>
       </>
    );
}