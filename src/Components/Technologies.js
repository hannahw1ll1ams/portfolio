import React from 'react';
import '../css/aboutPage.css'
import csharp from '../images/technologyIcons/csharp.png'
import figma from '../images/technologyIcons/figma.png'
import illustrator from '../images/technologyIcons/illustrator.png'
import indesign from '../images/technologyIcons/indesign.png'
import javascript from '../images/technologyIcons/javascript.png'
import procreate from '../images/technologyIcons/procreate.png'
import react from '../images/technologyIcons/react.png'
import swift from '../images/technologyIcons/swift.png'
import swiftUI from '../images/technologyIcons/swiftui.png'

export default function TechnologiesComponent () {

	return ( 
		<div className="technologies-container">
                <h1>TECHNOLOGIES</h1>
                <div className="icons-row">
                    <div className="iconDotContainer">
                        <img className="swift icons" src= {swift} alt='procreatswifteIcon'/>
                        <div className="dot black"></div>
                    </div>
                    <div className="iconDotContainer">
                        <img className="swiftUI icons" src= {swiftUI} alt='swiftUI'/>
                        <div className="dot black"></div>
                    </div>
                    <div className="iconDotContainer">
                        <img className="javascript icons" src= {javascript} alt='javascript'/>
                        <div className="dot"></div>
                    </div>
                    <div className="iconDotContainer">
                        <img className="csharp icons" src= {csharp} alt='csharp'/>
                        <div className="dot black"></div>
                    </div>
                    <div className="iconDotContainer">
                        <img className="react icons" src= {react} alt='react'/>
                        <div className="dot"></div>
                    </div>
                    <div className="iconDotContainer">
                        <img className="figma icons" src= {figma} alt='figma'/>
                        <div className="dot black"></div>
                    </div>
                    <div className="iconDotContainer">
                        <img className="illustrator icons" src= {illustrator} alt='illustrator'/>
                        <div className="dot black"></div>
                    </div>
                    <div className="iconDotContainer">
                        <img className="indesign icons" src= {indesign} alt='indesign'/>
                        <div className="dot"></div>
                    </div>
                    <div className="iconDotContainer">
                        <img className="procreate icons" src= {procreate} alt='procreate'/>
                        <div className="dot black"></div>
                    </div>
                </div>
            </div>
	) 
} 

