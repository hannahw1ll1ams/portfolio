import React from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css';
import '../css/portfolioPage.css'

//images
import workers from '../images/illustrations/seaViewWorkers.jpg'
import appLogos from '../images/appDesign/app-logos-03.png'
import salsaGraphic from '../images/infographic/salsaAsPoliticalSpeech.png'
import universalBasket from '../images/infographic/omnichannel-06.png'
import eventPosters from '../images/rowing/event-posters-together-01.png'
import ldsTshirtLogos from '../images/rowing/lds-tshirts-together-02.png'
import strategicPlan from '../images/rowing/strategicPlan3.PNG'

export default function PortfolioPage() {

    return (
        <div class="container">
        
        <div class="illustrations">
          <Link to='illustrations'><img className="workers responsive" src= {workers} alt='logo'/></Link>
          {/* <p className="workers-text">illustrations</p> */}
        </div>

        <div class="event-posters">
           <img className="event responsive padding" src= {eventPosters} alt='eventPosters'/> 
          {/* <p>event-posters</p> */}
        </div>

        <div class="app-designs">
           <img className="responsive padding" src= {appLogos} alt='appLogos'/> 
          {/* <p>app-designs</p> */}
        </div>

        <div class="lds-logos">
           <img className="responsive padding" src= {ldsTshirtLogos} alt='ldsTshirtLogos'/> 
          {/* <p>lds-logos</p> */}
        </div>

        <div class="strategic-plan">
           <img className="smallerImage padding" src= {strategicPlan} alt='strategicPlan'/> 
          {/* <p>strategic-plan</p> */}
        </div>

        <div class="salsa-as-political-speech">
          <img className="responsive padding" src= {salsaGraphic} alt='salsaGraphic'/> 
         {/* <p>salsa-as-political-speechs</p> */}
        </div>

        <div class="omni-channel-infographic">
          <img className="responsive padding" src= {universalBasket} alt='universalBasket'/> 
          {/* <p>omni-channel-infographic</p> */}
        </div>
        
      </div>
    );
}