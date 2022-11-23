import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<div className="w-full flex flex-col">
			<Link to="/">
				<div className="text-white text-2xl font-bold md:text-4xl lg:text-5xl ml-10 pt-2">
					Movie Explorer
				</div>
			</Link>
			<div className="text-white flex space-x-4 items-center justify-end mr-[110px] md:text-xl lg:text-2xl">
				<Link to="/popular" className="hover:underline hidden sm:block">
					<h2>Popular</h2>
				</Link>
				<Link to="/toprated" className="hover:underline hidden sm:block">
					<span>Top Rated</span>
				</Link>
				<Link to="/nowplaying" className="hover:underline hidden sm:block">
					<span>Now Playing</span>
				</Link>
			</div>
		</div>
	);
};

export default NavBar;
