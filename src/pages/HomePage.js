import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "../Components/MovieCard";
import NavBar from "../Components/NavBar";
import loading_spinner from "./../assets/loading_spinner.gif";

const HomePage = () => {
	const [movies, setMovies] = useState("Loading");

	async function fetchMovies() {
		const res = await axios.get(
			`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
		);
		console.log(res.data.results);
		return res.data.results;
	}

	useEffect(() => {
		fetchMovies()
			.then((res) => {
				setMovies(res);
			})
			.catch((err) => {
				alert(err);
			});
	}, []);

	if (movies === "Loading" || !movies || movies.length === 0)
		return (
			<div className="flex items-center justify-center h-screen bg-gray-700">
				<img src={loading_spinner} alt="loading" height="200px" width="200px" />
			</div>
		);
	else
		return (
			<div className="bg-gray-700 min-h-screen ">
				<NavBar />
				<div className="flex flex-wrap justify-evenly">
					{movies.map((movie) => (
						<MovieCard movie={movie} />
					))}
				</div>
			</div>
		);
};

export default HomePage;
