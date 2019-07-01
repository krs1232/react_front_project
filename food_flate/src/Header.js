import React, {Component} from 'react';
import {NavLink} from "react-router-dom";


class Header extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-sm-3 logo-column">
                            <h3><a href="#" style={{"color":"orange"}}>FOOD FLATE</a></h3>
                        </div>
                        <div className="col-6 col-sm-9 nav-column clearfix">
                            <div className="right-nav">
                                <div className="header-social">
                                    <a href="#" className="fa fa-facebook"></a>
                                    <a href="#" className="fa fa-twitter"></a>
                                    <a href="#" className="fa fa-github"></a>
                                </div>
                            </div>
                            <nav id="menu" className="d-none d-lg-block">
                                <ul>
                                    <li><NavLink to={"/"}>Home</NavLink></li>
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="portfolio.html">Menu</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;