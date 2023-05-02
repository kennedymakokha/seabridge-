import React from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const Header = () => {
    return (
        <>

            <header className="fixed-top header-fullpage top-border top-transparent wow fadeInDown">

                <nav className="navbar navbar-expand-lg bg-transparent">
                    <div className="container text-nowrap">
                        <div className="d-flex align-items-center w-100 col p-0" >
                            <Link className="navbar-brand rounded-bottom light-bg" to="/">
                                <img src="images/logo.png" style={{ height: 100, objectFit: 'fill' }} alt="" />
                            </Link>
                        </div>
                        <div className="d-inline-flex request-btn order-lg-last col p-0">
                            {/* <Link className="nav-link mr-2 ml-auto" to="#" id="search_home"><i className="icofont-search"></i></Link> */}
                            {/* <Link className="btn-theme icon-left bg-navy-blue no-shadow align-self-center" to="#" role="button" data-toggle="modal" data-target="#request_popup"><i className="icofont-list"></i> <span className="d-none d-sm-inline-block"> Request Quote</span></Link> */}
                            <button className="navbar-toggler x collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarCollapse" data-hover="dropdown" data-animations="slideInUp slideInUp slideInUp slideInUp">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item ">
                                    <Link className="nav-link" to="/" aria-haspopup="true" aria-expanded="false">Home </Link>

                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About Us</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/services">Services</Link>
                                </li>
                                {/* 
                                <li className="nav-item">
                                    <Link className="nav-link" to="services">News</Link>
                                </li> */}


                                <li className="nav-item ">
                                    <Link className="nav-link dropdown-toggle-mob" to="/contact" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Contact </Link>

                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;
