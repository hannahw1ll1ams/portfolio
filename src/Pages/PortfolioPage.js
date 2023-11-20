import React from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css';
import '../css/portfolioPage.css'

//images
import workers from '../images/illustrations/seaViewWorkers.jpg'
import requestsLogo from '../images/appDesign/requestsAppLogo.png'
import selfServeLogo from '../images/appDesign/selfServeLogo.png'
import salsaGraphic from '../images/infographic/salsaAsPoliticalSpeech.png'
import universalBasket from '../images/infographic/universalBasket.png'
import rowingDinner from '../images/rowing/anniversaryBall.png'
import springBall from '../images/rowing/springBall.png'
import frontLogo from '../images/rowing/ldsLogoBack.png'
import backLogo from '../images/rowing/ldsLogoFront.png'
import strategicPlan from '../images/rowing/strategicPlan3.PNG'

export default function PortfolioPage() {

    return (
        <div class="container">
        
        <div class="illustrations">
          <Link to='illustrations'><img className="workers responsive" src= {workers} alt='logo'/></Link>
          {/* <p className="workers-text">illustrations</p> */}
        </div>

        <div class="event-posters">
           {/* <img className="event responsive" src= {rowingDinner} alt='rowingDinner'/>  */}
           {/* <img className="event responsive" src= {springBall} alt='springBall'/>  */}
          {/* <p>event-posters</p> */}
        </div>

        <div class="app-designs">
           {/* <img className="responsive" src= {workers} alt='logo'/>  */}
          {/* <p>app-designs</p> */}
        </div>

        <div class="lds-logos">
           {/* <img className="responsive" src= {workers} alt='logo'/>  */}
          <p>lds-logos</p>
        </div>

        <div class="strategic-plan">
           {/* <img className="responsive" src= {workers} alt='logo'/>  */}
          <p>strategic-plan</p>
        </div>

        <div class="salsa-as-political-speech">
          {/* <img className="responsive" src= {workers} alt='logo'/>  */}
         <p>salsa-as-political-speechs</p>
        </div>

        <div class="omni-channel-infographic">
          {/* <img className="responsive" src= {workers} alt='logo'/>  */}
          <p>omni-channel-infographic</p>
        </div>

      </div>
    );



}