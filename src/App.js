import React, { Component } from 'react';
import './App.css';
import { Header } from './Header'
import { BestSellers } from './BestSellers'

function App() {
  return (
    <div className='appContainer'>
      <Header />
      <BestSellers />
    </div>
  );
}

export default App;
