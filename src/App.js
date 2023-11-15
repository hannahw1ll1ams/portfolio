import logo from './logo.svg';
import React, { Component } from 'react';
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
    </div>
  );
}

export default App;