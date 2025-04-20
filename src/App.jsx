import { useState } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import New_Arrival from './Components/New_Arrival';
import Our_vision from './Components/Our_vision';
import Our_Product from './Components/Our_Product';
import Rating from './Components/Rating';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <main>
        <div className="assets1">
          <Navbar />
          <Home />
        </div>
        <div className="assets2">
          <New_Arrival />
          <div className="Our_vision">
          <Our_vision />
          </div>
        </div>
        <Our_Product />
          <Rating />
        <div className="assets3">
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;