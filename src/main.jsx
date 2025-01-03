import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import User from "./components/User/User.jsx"
import Github , {githubInfoLoader} from './components/Github/Github.jsx';
import Contact from './components/Contact/Contact.jsx';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />} >
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact/>} />
          <Route path="user" element={<User/>}>
            <Route path=":usderid" element={<User/>}/>
          </Route>
          <Route
          loader = {githubInfoLoader}
          path="github" element={<Github/>} />
          <Route path="*" element={<div>404</div>} />
        </Route>
    )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
