import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
	return (
    <HashRouter>
      <Routes>
        <Route exact path = "/" element = {<HomePage />}>
      </Route>
      </Routes>
    </HashRouter>
	);
}

export default App;
