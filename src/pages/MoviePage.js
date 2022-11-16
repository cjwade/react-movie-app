import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../Components/NavBar";
import loading_spinner from "./../assets/loading_spinner.gif";

const MoviePage = () => {
	const { movieId } = useParams();
	const [movie, setMovie] = useState("loading");
	const [width, setWidth] = useState(window.screen.availWidth);
	const navigate = useNavigate();

	let mt = width > 786 ? (width * 9) / 16 - 250 : 0;

	window.addEventListener("resize", () => {
		setWidth(window.screen.availWidth);
	});

	async function fetchMovie() {
		const res =
			await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}
    `);
		return res.data;
	}
	/* eslint-disable */
	useEffect(() => {
		fetchMovie(movieId)
			.then((res) => {
				setMovie(res);
				if (width > 786) {
					window.scroll({ top: mt - 100, behavior: "smooth" });
				}
			})
			.catch((err) => {
				alert(err);
				navigate("/", { replace: true });
			});
	}, []);
	/* eslint-enable */
	if (movie === "loading" || !movie) {
		return (
			<div className="bg-gray-700 h-screen flex items-center justify-center">
				<img src={loading_spinner} alt="loading" />
			</div>
		);
	}
	return (
		<div className="bg-gray-700 text-white text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-6xl font-bold">
			{width < 768 ? (
				<NavBar />
			) : (
				<img
					src={"https://image.tmdb.org/t/p/original/" + movie.backdrop_path}
					alt="backdrop"
					className="w-screen aspect-video absolute top-0"
				/>
			)}
			<div
				className="flex flex-col items-center justify-center md:flex-row md:ml-[50px]"
				style={{
					marginTop: `${mt}px`,
				}}
			>
				<img
					src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
					alt="poster"
					className="rounded-xl border-white border-4 max-w-[min(400px,90%)] sm:max-w-[50%] md:h-[576px] z-10"
				/>
				<h1 className="z-10 md:ml-10 text-center">{movie.title}</h1>
			</div>
		</div>
	);
};

export default MoviePage;
