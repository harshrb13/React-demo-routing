import React from 'react';
import ReactDOM from 'react-dom/client';
import Layouts from './layouts';
import About from "./Components/about";
import Home from "./Components/Home"
import Features from "./Components/Features"
import './index.css';
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layouts/>}>
      <Route path="" element={<Home/>} />   
      <Route path="Features" element={<Features/>} />   
      <Route path="about" element={<About/>} />   
    </Route>
  )
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);