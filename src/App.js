import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Welcome } from "./pages/Welcome/Welcome";
import { Setup } from "./pages/Setup/Setup";
import { Planning } from "./pages/Planning/Planning";
import { Onboarding } from "./pages/Onboarding/Onboarding";

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
