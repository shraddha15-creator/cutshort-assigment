import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Welcome, Setup, Planning, Onboarding } from "./pages";

function App() {
	return (
		<div className="app">
			<Header />
			<Routes>
				<Route path="/" element={<Welcome />} />
				<Route path="/setup" element={<Setup />} />
				<Route path="/plans" element={<Planning />} />
				<Route path="/onboarding" element={<Onboarding />} />
			</Routes>
		</div>
	);
}

export default App;
