import React from 'react';
import { NavLink } from 'react-router-dom'

function Navbar() {


    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <NavLink activeClassName="active" className="logo navbar-brand" to="/">
                    <a class="navbar-brand" href="#">Harris Green</a>
                </NavLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                    <NavLink activeClassName="active" className="nav-link" to="/about">About</NavLink>
                    <li className="nav-item mx-2">
                            <NavLink activeClassName="active" className="nav-link" to="/portfolio">Portfolio</NavLink>
                        </li>
                    </div>
                </div>
            </div>
        </nav>


    )
}
export default Navbar;