import React from "react";
import finalVersion from '../../images/rowing/strategicPlan3.PNG'
import version1 from '../../images/rowing/strategicPlan1.jpeg'
import version2 from '../../images/rowing/strategicPlan2.png'
import planPillars from '../../images/rowing/planPillars.png'

import '../../css/Sub-pages/strategic-plan.css'
import '../../css/text-shared.css'

export default function StrategicPlanPage() {
    return (
       <>
        <p className="description">
            Collaborating with a rowing club on a illustration to communicate their 5 year strategic plan to club members. My concept is the club is the boat, starting at one end of the River Dee in 2022, and progressing towards 2027. The guiding principles of the plan are represented by the boat's oars, representing the club members' role in enacting the plan.
        </p>
        <div className="finalVersionContainer">
                <div className="topText">
                    <h1>STRATEGIC PLAN</h1>
                    <h1>2022</h1>
                </div>
                <img className="strategicTallImageWidth" src= {finalVersion} alt='finalVersion'/>
                <div className="bottomText">
                    <p className="imageKeyWords">Final iteration / communication / clean / procreate / vectors</p>
                    <h1></h1>
                </div>
        </div>

       <div className="version1Container">
                <div className="topText">
                    <h1></h1>
                    <h1>2022</h1>
                </div>
                <img className="strategicTallImageWidth" src= {version1} alt='version1'/>
                <div className="bottomText">
                    <p className="imageKeyWords">Hand drawn style</p>
                    <h1></h1>
                </div>
        </div>

        <div className="version2Container">
                <div className="topText">
                    <h1></h1>
                    <h1>2022</h1>
                </div>
                <img className="strategicTallImageWidth" src= {version2} alt='version2'/>
                <div className="bottomText">
                    <p className="imageKeyWords">Playing with perspective</p>
                    <h1></h1>
                </div>
        </div>

        <div className="planPilarsContainer">
                <div className="topText">
                    <h1>PILLARS</h1>
                    <h1>2022</h1>
                </div>
                <img className="strategicWideImageWidth" src= {planPillars} alt='version1'/>
                <div className="bottomText">
                    <p className="imageKeyWords">Member's values / trying to include the diversity of the club</p>
                    <h1></h1>
                </div>
        </div>
       </>
    );
}