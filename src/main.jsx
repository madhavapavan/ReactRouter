import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import User from "./components/User/User.jsx"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />} >
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="user" element={<User/>}/>
        </Route>
    )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);