import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './Components/Header';
import Footer from './Components/Footer';

import PortfolioPage from './Pages/PortfolioPage';
import ContactPage from './Pages/ContactPage';
import AboutPage from './Pages/AboutPage';
import IllustrationsPage from './Pages/Illustrations'

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
        
        <Routes>
          <Route path="/about" exact element={<AboutPage />} />
          <Route path="/portfolio" exact element={<PortfolioPage />} />
          <Route path="/portfolio/illustrations" exact element={<IllustrationsPage />} />
          <Route path="/contact" exact element={<ContactPage />} />
        </Routes>
        
        <footer className="App-footer">
            <Footer />
        </footer>
        
      </div>
  );
}

export default App;





// home page -> /
// contact page -> /contact
// about page -> /about
// portfolio page -> /portfolio
// illustrations /portfolio/illustrations and a back button?
// or 
// portfolio page -> illustration page /portfolio/illustrations and a back button?
// or 
// illustration page /portfolio/123 and a back button?



