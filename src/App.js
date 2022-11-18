import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
	return (
		<HashRouter>
			<Routes>
				<Route exact path="/" element={<HomePage />}></Route>
				<Route exact path="/movie/:movieId" element={<MoviePage />}></Route>
				<Route exact path="*" element={<PageNotFound />}></Route>
			</Routes>
		</HashRouter>
	);
};

export default App;
