import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<nav
			className="navbar navbar-expand-lg fixed-top bg-dark border-bottom border-body"
			data-bs-theme="dark">
			<div className="container">
				<Link
					className="navbar-brand text-light"
					to="/">
					<img
						src="	https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
						alt="Logo"
						width="30"
						height="24"
						className="d-inline-block align-text-top mx-1 my-1"
					/>
					NewsMonkey
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link
								className="nav-link text-light"
								aria-current="page"
								to="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link text-light"
								to="/entertainment">
								Entertainment
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link text-light"
								to="/science">
								Science
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link text-light"
								to="/general">
								General
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link text-light"
								to="/health">
								Health
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link text-light"
								to="/business">
								Business
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link text-light"
								to="/sports">
								Sports
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link text-light"
								to="/technology">
								Technology
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
