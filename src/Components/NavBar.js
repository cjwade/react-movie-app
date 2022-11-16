import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<div className="w-full">
			<Link to="/">
				<div className="text-white text-2xl font-bold md:text-4xl lg:text-5xl ml-10 pt-2">
					Movie Explorer
				</div>
			</Link>
		</div>
	);
};

export default NavBar;
