import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";

const App = () => {
	return (
		<HashRouter>
			<Routes>
				<Route exact path="/" element={<HomePage />}></Route>
				<Route exact path="/movie/:movieId" element={<MoviePage />}></Route>
			</Routes>
		</HashRouter>
	);
}

export default App;
