import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';


import React, { Component } from 'react';
import './App.css';
import { Header } from './Header';
import { BestSellers } from './BestSellers';
import { Product } from './Product'


const router = createBrowserRouter([
  {
    path: '/',
    element: <BestSellers />,
  },
  {
    path: 'product/:productId',
    element: <Product />,
  },
]);


function App() {
  return (
    <div className='appContainer'>
      <Header />
      <hr className="divider" />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
