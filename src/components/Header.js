import React from "react";
import Loader from "./Loader";

const Header = () => {
	return (
		<>
			{/* <Loader /> */}
			<header className="fixed-top header-fullpage bordered-nav wow fadeInDown">


				<nav className="navbar navbar-expand-lg " style={{ backgroundColor: "rgba(24, 54, 80, 0.65)" }}>
					<div className="container text-nowrap bdr-nav px-0">
						<div className="d-flex mr-auto">
							<a className="navbar-brand rounded-bottom light-bg" href="home-one">
								<img src="images/logo.png" alt="" />
							</a>
						</div>
						<span className="order-lg-last d-inline-flex request-btn">
							<a className="nav-link mr-2 ml-auto" href="#" id="search_home"><i className="icofont-search"></i></a>
						</span>
						<button className="navbar-toggler x collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarCollapse" data-hover="dropdown" data-animations="slideInUp slideInUp slideInUp slideInUp">
							<ul className="navbar-nav ml-auto">
								<li className="nav-item">
									<a className="nav-link" href="/">Home</a>
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
