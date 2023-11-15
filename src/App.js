import React from 'react';
import './App.css';
import Header from './Components/Header';

//fonts
import './fonts/Inter-Black.woff'
import './fonts/Inter-Bold.woff'
import './fonts/Inter-italic.ttf'
import './fonts/Inter-Medium.woff2'
import './fonts/Inter-Regular.woff'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Header/>
      </header>
      
      <div class="container">
        <div class="illustrations">
          <p>illustrations</p>
        </div>
        <div class="event-posters">
          <p>event-posters</p>
        </div>
        <div class="app-designs">
          <p>app-designs</p>
        </div>
        <div class="lds-logos">
          <p>lds-logos</p>
        </div>
        <div class="strategic-plan">
          <p>strategic-plan</p>
        </div>
        <div class="salsa-as-political-speech">
         <p>salsa-as-political-speechs</p>
        </div>
        <div class="omni-channel-infographic">
          <p>omni-channel-infographic</p>
        </div>
      </div>
      
    </div>
  );
}

export default App;