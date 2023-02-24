import React from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const Header = () => {
	return (
		<>
			{/* <Loader /> */}
			<header className="fixed-top header-fullpage bordered-nav wow fadeInDown">
				<nav className="navbar navbar-expand-lg " style={{ backgroundColor: "rgba(24, 54, 80, 0.65)" }}>
					<div className="container text-nowrap bdr-nav px-0">
						<div className="d-flex mr-auto">
							<Link className="navbar-brand rounded-bottom light-bg" to="/">
								<img src="images/logo.png" alt="" />
							</Link>
						</div>
						<span className="order-lg-last d-inline-flex request-btn">
							<Link className="nav-link mr-2 ml-auto" to="/" id="search_home"><i className="icofont-search"></i></Link>
						</span>
						<button className="navbar-toggler x collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarCollapse" data-hover="dropdown" data-animations="slideInUp slideInUp slideInUp slideInUp">
							<ul className="navbar-nav ml-auto">
								<li className="nav-item">
									<Link className="nav-link" to="/">Home</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/about">About</Link>
								</li>

								<li className="nav-item">
									<Link className="nav-link" to="/services">Services</Link>
								</li>
								{/* <li className="nav-item">
									<Link className="nav-link"to="/services">News</Link>
								</li> */}
								<li className="nav-item dropdown">
									<Link className="nav-link dropdown-toggle-mob" to="/" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Contact <i className="icofont-rounded-down"></i></Link>
									<ul className="dropdown-menu">
										<li><Link className="dropdown-item" to="/contact">Contact Us</Link></li>
										<li><Link className="dropdown-item" to="/contactusoption">Contact Us Option</Link></li>
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
