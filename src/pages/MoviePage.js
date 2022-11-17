import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../Components/NavBar";
import loading_spinner from "./../assets/loading_spinner.gif";
import play_icon from "./../assets/play_icon.png";

const MoviePage = () => {
	const { movieId } = useParams();
	const [movie, setMovie] = useState("loading");
	const [width, setWidth] = useState(window.screen.availWidth);
	const [clips, setClips] = useState([]);
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

	async function fetchClips(movieId) {
		const res =
			await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.REACT_APP_MOVIE_API_KEY}
        `);
		return res.data.results;
	}

	/* eslint-disable */
	useEffect(() => {
		fetchMovie(movieId)
			.then((res) => {
				setMovie(res);
				fetchClips(movieId)
					.then((res) => {
						setClips(res);
					})
					.catch((err) => {
						alert(err);
						navigate("/", { replace: true });
					});

				if (width > 786) {
					window.scroll({ top: mt - 100, behavior: "smooth" });
				}
			})
			.catch((err) => {
				alert(err);
				navigate("/", { replace: true });
			});
	}, [movieId, navigate, mt, width]);
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

			{/* Clips and Trailers */}
			<div
				className="mt-5 md:mt-10 text-xl md:text-2xl lg:text-4xl pb-[100px] mx-2 sm:mx-5
         md:mx-[50px] lg:mx-[100px]"
			>
				Clips and Trailers
				<div className="flex overflow-scroll scrollbar-hide snap-x mt-5 md:mt-10">
					{clips.map((clip) => (
						<div
							className="ml-5"
							onClick={() => {
								window.open(`https://youtube.com/watch?v=${clip.key}`);
							}}
						>
							<div className="relative flex-shrink-0 h-[180px] md:h-[250px] lg:h-[300px] aspect-video rounded-xl">
								<img
									src={`https://img.youtube.com/vi/${clip.key}/hqdefault.jpg`}
									alt="youtube thumbnail"
									className="absolute object-cover h-[180px] md:h-[250px] lg:h-[300px]
                     aspect-video rounded-xl "
								/>
								<img
									src={play_icon}
									alt="play icon"
									className="absolute inset-0 w-[150px] h-[150px] m-auto"
								/>
							</div>
							<p className="text-lg md:text-xl font-bold mt-1 text-center">
								{clip.name}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default MoviePage;
