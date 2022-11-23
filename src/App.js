import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import NowPlaying from "./pages/NowPlaying";
import PageNotFound from "./pages/PageNotFound";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";

const App = () => {
	return (
		<HashRouter>
			<Routes>
				<Route exact path="/" element={<HomePage />}></Route>
				<Route exact path="/movie/:movieId" element={<MoviePage />}></Route>
				<Route exact path="*" element={<PageNotFound />}></Route>
				<Route exact path="/popular" element={<Popular />}></Route>
				<Route exact path="/toprated" element={<TopRated />}></Route>
				<Route exact path="/nowplaying" element={<NowPlaying />}></Route>
			</Routes>
		</HashRouter>
	);
};

export default App;
