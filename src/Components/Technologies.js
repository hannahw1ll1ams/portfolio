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
        <div className="icons-row">

                <img className="swift icons" src= {swift} alt='procreatswifteIcon'/>
   
                <img className="swiftUI icons" src= {swiftUI} alt='swiftUI'/>

                <img className="javascript icons" src= {javascript} alt='javascript'/>

                <img className="csharp icons" src= {csharp} alt='csharp'/>

                <img className="react icons" src= {react} alt='react'/>

                <img className="figma icons" src= {figma} alt='figma'/>

                <img className="illustrator icons" src= {illustrator} alt='illustrator'/>

                <img className="indesign icons" src= {indesign} alt='indesign'/>

                <img className="procreate icons" src= {procreate} alt='procreate'/>

        </div>
	) 
} 

