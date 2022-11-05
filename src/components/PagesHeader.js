import React from "react";
import Loader from "./Loader";

const Header = () => {
    return (
        <>

            <header className="fixed-top header-fullpage top-border top-transparent wow fadeInDown">

                <nav className="navbar navbar-expand-lg bg-transparent">
                    <div className="container text-nowrap">
                        <div className="d-flex align-items-center w-100 col p-0">
                            <a className="navbar-brand rounded-bottom light-bg" href="home-one">
                                <img src="images/logo.png" alt="" />
                            </a>
                        </div>
                        <div className="d-inline-flex request-btn order-lg-last col p-0">
                            <a className="nav-link mr-2 ml-auto" href="#" id="search_home"><i className="icofont-search"></i></a>
                            <a className="btn-theme icon-left bg-navy-blue no-shadow align-self-center" href="#" role="button" data-toggle="modal" data-target="#request_popup"><i className="icofont-list"></i> <span className="d-none d-sm-inline-block"> Request Quote</span></a>
                            <button className="navbar-toggler x collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarCollapse" data-hover="dropdown" data-animations="slideInUp slideInUp slideInUp slideInUp">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle-mob" href="home-one" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home <i className="icofont-rounded-down"></i></a>

                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="about">About Us</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="services">Services</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="services">News</a>
                                </li>


                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle-mob" href="home-one" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Contact <i className="icofont-rounded-down"></i></a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="contact">Contact Us</a></li>
                                        <li><a className="dropdown-item" href="contactusoption">Contact Us Option</a></li>
                                    </ul>
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
