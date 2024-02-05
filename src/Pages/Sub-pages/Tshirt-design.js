import React from "react";
import ldsTogether from '../../images/rowing/lds-together-text.png'
import tshirt1 from '../../images/rowing/tshirt-07.png'
import tshirt2 from '../../images/rowing/tshirt-08.png'
import tshirt3 from '../../images/rowing/tshirt-09.png'
import tshirt4 from '../../images/rowing/tshirt-10.png'

import '../../css/Sub-pages/tshirt-design.css'
import '../../css/text-shared.css'

export default function TshirtDesignPage() {
    return (
        <>
            <p className="description">
                Created a t-shirt design to sell at Royal Chester rowing club's home event, that celebrates the club and the River Dee.
            </p>
        <div class="finalTshirtContainer">
            
            <div class="finalLogos boxLayout">
                <div className="topText textWidth">
                    <h1>LONG DISTANCE SCULLS EVENT T-SHIRT DESIGN</h1>
                    <h1>2022</h1>
                </div>
                <img className="ldsResponsive" src= {ldsTogether} alt='ldsTogether'/>               
                <div className="bottomText tshirtBottomText">
                    <p className="imageKeyWords">Final t-shirt design - single white colour, the small front logo is a negative space reverse of the larger back logo</p>
                    <h1></h1>
                </div>
            </div>

            <div class="iteration1 boxLayout">
                <div className="topText textWidth">
                    <h1>1</h1>
                    <h1></h1>
                </div>
                <img className="ldsResponsive" src= {tshirt1} alt='anniversaryBall'/>
                <div className="bottomText tshirtBottomText">
                    <p className="imageKeyWords">Initial iteration - building on concept of the royal’s crest, playing with size of shapes and adding boat in idea of acting like a compass</p>
                    <h1></h1>
                </div>
            </div>

            <div class="iteration2 boxLayout">
                <div className="topText textWidth">
                    <h1>2</h1>
                    <h1></h1>
                </div>
                <img className="ldsResponsive" src= {tshirt4} alt='anniversaryBall'/>
                <div className="bottomText tshirtBottomText">
                    <p className="imageKeyWords">Building on compass idea, adding references on NSEW of iconic places along the river dee e.g. Flagpoles, the Blue Bridge</p>
                    <h1></h1>
                </div>
            </div>

            <div class="iteration3 boxLayout">
                <div className="topText textWidth">
                    <h1>3</h1>
                    <h1></h1>
                </div>
                <img className="ldsResponsive" src= {tshirt2} alt='anniversaryBall'/>
                <div className="bottomText tshirtBottomText">
                    <p className="imageKeyWords">Experimenting with making compass location points less explicitly conveyed with icons</p>
                    <h1></h1>
                </div>
            </div>

            <div class="iteration4 boxLayout">
                <div className="topText textWidth">
                    <h1>4</h1>
                    <h1></h1>
                </div>
                <img className="ldsResponsive" src= {tshirt3} alt='anniversaryBall'/>
                <div className="bottomText tshirtBottomText">
                    <p className="imageKeyWords">Playing with colour</p>
                    <h1></h1>
                </div>
            </div>
        </div>
        </>
    )
};