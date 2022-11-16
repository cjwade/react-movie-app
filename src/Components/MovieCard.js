import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
	return (
		<Link to={`/movie/${movie.id}`}>
			<div
				className="w-[21rem] max-w-[100%] bg-black rounded-xl p-2 text-white m-5 flex flex-col 
         cursor-pointer text-xl hover:scale-110 transition ease-in-out"
			>
				<img
					className="w-full self-center rounded-lg h-[476px]"
					src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
					alt="poster"
				/>
				<h3 className="my-1">{movie.title}</h3>
				<h3 className="my-1">
					⭐ {parseFloat(movie.vote_average.toFixed(1))}/10
				</h3>
			</div>
		</Link>
	);
};

export default MovieCard;
