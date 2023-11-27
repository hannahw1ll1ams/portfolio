import React from "react";
import frontLogo from '../../images/rowing/ldsLogoFront.png'
import backLogo from '../../images/rowing/ldsLogoBack.png'
import tshirt1 from '../../images/rowing/tshirt-07.png'
import tshirt2 from '../../images/rowing/tshirt-08.png'
import tshirt3 from '../../images/rowing/tshirt-09.png'
import tshirt4 from '../../images/rowing/tshirt-10.png'


import '../../css/Sub-pages/tshirt-design.css'

export default function TshirtDesignPage() {
    return (
    <>
        <div className="tshirtContainer">
            <div className="topText">
                <h1>LONG DISTANCE SCULLS EVENT T-SHIRT</h1>
                <h1>2022</h1>
            </div>
            <div className="imageDescription">
                <p>front</p>
                <p>back</p>
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

        <div className="portugalContainer">
            <div className="logoContainer">
                <div className="topText">
                     <h1>1</h1>
                       <h1></h1>
                </div>
                <img className="singleImage" src= {tshirt1} alt='ines'/>
                <div className="bottomText">
                    <h1></h1>
                     <p className="imageKeyWords">procreate / illustration</p>
                </div>
            </div>

            <div className="logoContainer">
                <div className="topText">
                     <h1>2</h1>
                       <h1></h1>
                </div>
                <img className="singleImage" src= {tshirt4} alt='ines'/>
                <div className="bottomText">
                    <h1></h1>
                     <p className="imageKeyWords">first live sketch</p>
                </div>
            </div>
        </div>

        <div className="portugalContainer">
            <div className="logoContainer">
                <div className="topText">
                     <h1>3</h1>
                       <h1></h1>
                </div>
                <img className="singleImage" src= {tshirt2} alt='ines'/>
                <div className="bottomText">
                    <h1></h1>
                     <p className="imageKeyWords">procreate / illustration</p>
                </div>
            </div>

            <div className="logoContainer">
                <div className="topText">
                     <h1>4</h1>
                       <h1></h1>
                </div>
                <img className="singleImage" src= {tshirt3} alt='ines'/>
                <div className="bottomText">
                    <h1></h1>
                     <p className="imageKeyWords">first live sketch</p>
                </div>
            </div>
        </div>
    </>
    );
}