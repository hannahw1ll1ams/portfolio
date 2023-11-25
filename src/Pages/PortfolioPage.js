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

import pp from '../images/profilePicture.png'


export default function PortfolioPage() {

    return (
        <div class="container">
      
          <div class="img__wrap illustrations">
            <Link to='illustrations'>
              <img className="responsive img__img padding" src= {workers} alt='two people working'/>
              <div class="img__description_layer">
                <p class="img__description">LIVE SKETCH</p>
              </div> 
            </Link>
          </div>

          <div class="img__wrap event-posters">
            <Link to='eventposters'>
              <img className="responsive img__img padding" src= {eventPosters} alt='eventPosters'/>
              <div class="img__description_layer">
                <p class="img__description">POSTERS</p>
              </div>
            </Link>
          </div>

          <div class="img__wrap app-designs">
            <Link to='appdesign'>
              <img className="responsive img__img padding" src= {appLogos} alt='appLogos'/>
              <div class="img__description_layer">
                <p class="img__description">APP DESIGN</p>
              </div>
            </Link>
          </div>

          <div class="img__wrap lds-logos">
            <Link to='tshirtlogo'>
              <img className="responsive img__img padding" src= {ldsTshirtLogos} alt='ldsTshirtLogos'/>
              <div class="img__description_layer">
                <p class="img__description">T-SHIRT DESIGN</p>
              </div>
            </Link>
          </div>

          <div class="img__wrap strategic-plan">
            <Link to='strategicplan'>
              <img className="smallerImage responsive img__img padding" src= {strategicPlan} alt='strategicPlan'/>
              <div class="img__description_layer">
                <p class="img__description">STRATEGIC PLAN</p>
              </div>
            </Link>
          </div>

          <div class="img__wrap salsa-as-political-speech">
            <Link to='salsapoliticalspeech'>
              <img className="responsive img__img padding" src= {salsaGraphic} alt='salsaGraphic'/>
              <div class="img__description_layer">
                <p class="img__description">SALSA AS POLITICAL SPEECH <br /> INFOGRAPHIC</p>
              </div>
            </Link>
          </div>

          <div class="img__wrap omni-channel-infographic">
            <Link to='omnichannel'>
              <img className="responsive img__img padding" src= {universalBasket} alt='universalBasket'/>
              <div class="img__description_layer">
                <p class="img__description">OMNI-CHANNEL VISION</p>
              </div>
            </Link>
          </div>
        
      </div>
    );
}