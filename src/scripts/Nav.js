import React, { Component } from 'react';
import logo from '../images/LALogo.jpg';
import twitter from '../images/twitter.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import { Router, Route, Link, Switch } from 'react-router-dom'
import * as Pages from './Pages.js';
class Nav extends Component {
    render() {
        return (
                    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white border-bottom">
                        <a className="navbar-brand" href="#"><img src={logo} className="img-fluid d-inline-block" /> <span className="align-bottom">Live to Skate - Skate to Live</span></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/laskateco/home">Home <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/laskateco/news">News</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/laskateco/about">About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/laskateco/products"> Products</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/laskateco/resources">Resources</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/laskateco/shop">Shop</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/laskateco/contact">Contact Us</Link>
                                </li>
                            </ul>
                            <address className="navbar-text p-0">
                                Los Angeles Skate Co.<br />
                                5401 Santa Monica Blvd<br />
                                Los Angeles, CA 90029<br />
                                Phone: (323)-46-SKATE<br />
                                <a href="https://www.facebook.com/LA-Skate-Co-158723624240308/"><img src={facebook} alt="Facebook logo" /></a>
                                <a href="https://www.instagram.com/lask8/"><img src={instagram} alt="Instagram logo"/></a>
                                <a href="https://twitter.com/lask8?lang=en"><img src={twitter} alt="Twitter logo" /></a>
                            </address>
                        </div>
                    </nav>
        );
    }
}

export default Nav;