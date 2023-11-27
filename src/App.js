import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './Components/Header';
import Footer from './Components/Footer';

import ContactPage from './Pages/ContactPage';
// import AboutPage from './Pages/AboutPage';

import PortfolioPage from './Pages/PortfolioPage';
import IllustrationsPage from './Pages/Sub-pages/Illustrations'
import EventPostersPage from "./Pages/Sub-pages/Event-posters"
import AppDesignsPage from './Pages/Sub-pages/App-designs';
import TshirtDesignPage from './Pages/Sub-pages/Tshirt-design';
import OmnichannelInfographicPage from './Pages/Sub-pages/Omni-channel-infographic';
import GraphicsPage from './Pages/Sub-pages/Graphics';
import StrategicPlanPage from './Pages/Sub-pages/Strategic-Plan';

import ErrorPage from './Pages/ErrorPage';

//fonts
import './fonts/Inter-Black.woff'
import './fonts/Inter-Bold.woff'
import './fonts/Inter-italic.ttf'
import './fonts/Inter-Medium.woff2'
import './fonts/Inter-Regular.woff'

function App() {
  return (
      <div className="App">
        <Header/>
        
        <Routes>
          {/* <Route path="/about" exact element={<AboutPage />} /> */}

          <Route path="/" exact element={<PortfolioPage />} />

          <Route path='/portfolio'>
            <Route index element={ <PortfolioPage /> }/>
            <Route path='/portfolio/illustrations' element={<> <IllustrationsPage /><Footer /></> }/>
            <Route path='/portfolio/eventposters' element={ <><EventPostersPage /><Footer /></>} />
            <Route path='/portfolio/appdesign' element={<><AppDesignsPage /><Footer /></>} />
            <Route path='/portfolio/tshirtlogo' element={<><TshirtDesignPage /><Footer /></>} />
            <Route path='/portfolio/strategicplan' element={<><StrategicPlanPage /><Footer /></>} />
            <Route path='/portfolio/graphics' element={<><GraphicsPage /><Footer /></>} />
            <Route path='/portfolio/omnichannel' element={<><OmnichannelInfographicPage /><Footer /></>} />
         </Route>
          
          <Route path="/contact" exact element={<ContactPage />} />
          <Route path="/*" exact element={<ErrorPage />} />
        </Routes>

      </div>
  );
}

export default App;
