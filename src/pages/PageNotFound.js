import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
	const [time, setTime] = useState(5);
	const navigate = useNavigate();
	/* eslint-disable */
	useEffect(() => {
		setTimeout(() => {
			setTime(time - 1);
			if (time === 0) {
				navigate("/", { replace: true });
			}
		}, 1000);
	}, [time]);

	return (
		<div className="bg-gray-700 h-screen flex flex-col items-center justify-center text-8xl font-bold">
			<div className="text-4xl text-red-600">404</div>
			<div className="text-4xl text-white">Page Not Found</div>
			<div className="text-4xl text-white">
				Redirecting to Home Page in {time} seconds...
			</div>
		</div>
	);
};

export default PageNotFound;
