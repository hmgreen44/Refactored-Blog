import React from 'react';
import './App.css';
import NavBar from './Components/Navbar'
import Portfolio from './Components/Portfolio'
import LandingPage from './Components/LandingPage'
import About from './Components/About'
import { Router } from 'react-router';
import {
  Route,
} from 'react-router-dom'
import history from "./history";

export default function App() {
  



  
    return (
      <div className="App">
        <Router history={history}>
          <NavBar />
          <Route exact={true} path="/">
            <LandingPage />
          </Route>
          <Route path="/about">
              <About />
            </Route>
          <Route path="/portfolio">
              <Portfolio />
            </Route>
        </Router>
      </div>

    );
  }

