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
                asked to create a t-shirt design to sell at the royal chester rowing club's home event, that celebrates the club and the river dee.
            </p>
        <div class="finalTshirtContainer">
            
            <div class="finalLogos boxLayout">
                <div className="topText textWidth">
                    <h1>LONG DISTANCE SCULLS EVENT T-SHIRT DESIGN</h1>
                    <h1>2022</h1>
                </div>
                <img className="ldsResponsive" src= {ldsTogether} alt='ldsTogether'/>               
                <div className="bottomText tshirtBottomText">
                    <h1></h1>
                    <p className="imageKeyWords">final t-shirt design - single colour, small front logo is a negative space reverse of the larger back logo</p>
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
                    <p className="imageKeyWords">initial iteration - building on concept of the royal’s crest, playing with size of shapes and adding boat in idea of acting like a compass</p>
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
                    <p className="imageKeyWords">building on compass idea, adding references on NSEW of iconic places along the river dee e.g. flagpoles, the blue bridge</p>
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
                    <p className="imageKeyWords">experimenting with making compass location points less explicitly conveyed with icons</p>
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
                    <p className="imageKeyWords">playing with colour</p>
                </div>
            </div>
        </div>
        </>
    )
};