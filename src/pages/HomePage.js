import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import loading_spinner from "./../assets/loading_spinner.gif";

const HomePage = () => {

	const [movies, setMovies] = useState("Loading");
   

	if (movies === "Loading")
		return (
			<div className="flex items-center justify-center h-screen bg-gray-700">
				<img src={loading_spinner} alt="loading" height="200px" width="200px" />
			</div>
		);


	return (
		<div className="bg-gray-700 min-h-screen ">
			<NavBar />
		</div>
	);
};

export default HomePage;
