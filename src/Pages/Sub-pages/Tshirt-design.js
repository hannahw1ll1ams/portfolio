import React from "react";
import ldsTogether from '../../images/rowing/lds-together.png'
import tshirt1 from '../../images/rowing/tshirt-07.png'
import tshirt2 from '../../images/rowing/tshirt-08.png'
import tshirt3 from '../../images/rowing/tshirt-09.png'
import tshirt4 from '../../images/rowing/tshirt-10.png'


import '../../css/Sub-pages/tshirt-design.css'
import '../../css/text-shared.css'

export default function TshirtDesignPage() {
    return (
        // <div className="tshirtContainer">
        //                 <div class="ldsTogether">
        //         <img className="tshirtResponsive lds" src= {ldsTogether} alt='ldsTogether'/>  
        //     </div>
        //     <div className="iterations">
        //         <div class="iteration1">
        //         <img className="tshirtResponsive" src= {tshirt1} alt='ines'/>
        //         </div>

        //         <div class="iteration2">
        //         <img className="tshirtResponsive" src= {tshirt4} alt='ines'/>
        //         </div>

        //         <div class="iteration3">
        //         <img className="tshirtResponsive" src= {tshirt2} alt='ines'/>
        //         </div>

        //         <div class="iteration4">
        //         <img className="tshirtResponsive" src= {tshirt3} alt='ines'/>
        //         </div>
        //     </div>
        // </div>

        <div class="finalTshirtContainer">

            <div class="finalLogos boxLayout">
                <div className="topText textWidth">
                    <h1>LONG DISTANCE SCULLS EVENT T-SHIRT DESIGN</h1>
                    <h1>2022</h1>
                </div>
                <img className="ldsResponsive" src= {ldsTogether} alt='ldsTogether'/>               
                <div className="bottomText tshirtBottomText">
                    <h1></h1>
                    <p className="imageKeyWords">final design - monotone, front logo is a negative space reverse of the back logo</p>
                </div>
            </div>

            <div class="iteration1 boxLayout">
                <div className="topText textWidth">
                    <h1>1</h1>
                    <h1></h1>
                </div>
                <img className="ldsResponsive" src= {tshirt1} alt='anniversaryBall'/>
                <div className="bottomText tshirtBottomText">
                    <h1></h1>
                    <p className="imageKeyWords">building on royal’s crest, adding boat that like compass points</p>
                </div>
            </div>

            <div class="iteration2 boxLayout">
                <div className="topText textWidth">
                    <h1>2</h1>
                    <h1></h1>
                </div>
                <img className="ldsResponsive" src= {tshirt4} alt='anniversaryBall'/>
                <div className="bottomText tshirtBottomText">
                    <h1></h1>
                    <p className="imageKeyWords">building on compass idea, adding shapes on NSEW of iconic points of reference along the river dee e.g. flagpoles, the motorway bridge</p>
                </div>
            </div>

            <div class="iteration3 boxLayout">
                <div className="topText textWidth">
                    <h1>3</h1>
                    <h1></h1>
                </div>
                <img className="ldsResponsive" src= {tshirt2} alt='anniversaryBall'/>
                <div className="bottomText tshirtBottomText">
                    <h1></h1>
                    <p className="imageKeyWords">experimenting with compass places less explicitly writter</p>
                </div>
            </div>

            <div class="iteration4 boxLayout">
                <div className="topText textWidth">
                    <h1>4</h1>
                    <h1></h1>
                </div>
                <img className="ldsResponsive" src= {tshirt3} alt='anniversaryBall'/>
                <div className="bottomText tshirtBottomText">
                    <h1></h1>
                    <p></p>
                </div>
            </div>
        </div>
    )
};