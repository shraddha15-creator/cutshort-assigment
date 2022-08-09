import { useNavigate } from "react-router-dom";
import { CustomStepper } from "../../components/CustomStepper/CustomStepper";
import "./welcome.css";

export const Welcome = () => {
	const navigate = useNavigate();
	return (
		<>
			<CustomStepper step="1" />
			<div className="main-container">
				<p className="container-title">Welcome! First things first...</p>
				<p className="container-subtitle">You can always change them later.</p>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						navigate("/setup");
					}}
					className="inputs-container"
				>
					<label className="input-label">Full Name</label>
					<input placeholder="Steve Jobs" required />
					<label className="input-label">Display Name</label>
					<input placeholder="Steve" required />
					<button type="submit">Create Workspace</button>
				</form>
			</div>
		</>
	);
};
