import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';

//fonts
import './fonts/Inter-Black.woff'
import './fonts/Inter-Bold.woff'
import './fonts/Inter-italic.ttf'
import './fonts/Inter-Medium.woff2'
import './fonts/Inter-Regular.woff'

//images
import workers from './images/illustrations/seaViewWorkers.jpg'
import requestsLogo from './images/appDesign/requestsAppLogo.png'
import selfServeLogo from './images/appDesign/selfServeLogo.png'
import salsaGraphic from './images/infographic/salsaAsPoliticalSpeech.png'
import universalBasket from './images/infographic/universalBasket.png'
import rowingDinner from './images/rowing/anniversaryBall.png'
import springBall from './images/rowing/springBall.png'
import frontLogo from './images/rowing/ldsLogoBack.png'
import backLogo from './images/rowing/ldsLogoFront.png'
import strategicPlan from './images/rowing/strategicPlan3.PNG'


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Header/>
      </header>
      
      <div class="container">
        
        <div class="illustrations">
          <a href='illustrations'><img className="workers responsive" src= {workers} alt='logo'/></a>
          {/* <p className="workers-text">illustrations</p> */}
        </div>

        <div class="event-posters">
           <img className="event responsive" src= {rowingDinner} alt='rowingDinner'/> 
           <img className="event responsive" src= {springBall} alt='springBall'/> 
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

      <footer className="App-footer">
          <Footer />
      </footer>
      
    </div>
  );
}

export default App;