import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  
	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}

	return (
		<>
			<footer className="w-full bg-black">
				<div className="text-white flex flex-row justify-center space-x-4 my-5">
					<Link className="hover:underline" to="/" onClick={scrollToTop}>
						Home
					</Link>
					<Link className="hover:underline" to="/popular">
						Popular
					</Link>
					<Link className="hover:underline" to="/toprated">
						Top Rated
					</Link>
					<Link className="hover:underline" to="/nowplaying">
						Now Playing
					</Link>
				</div>
				<div className="text-white text-center mb-5">
					Copyright &copy; 2022 Movie Explorer
				</div>
			</footer>
		</>
	);
};

export default Footer;
