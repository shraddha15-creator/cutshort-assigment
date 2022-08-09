import { useNavigate } from "react-router-dom";
import { CustomStepper } from "../../components/CustomStepper/CustomStepper";
import "./setup.css";

export const Setup = () => {
	const navigate = useNavigate();

	return (
		<>
			<CustomStepper step="2" />
			<div className="main-container">
				<h2 className="container-title">
					Let's set up a home for all your work
				</h2>
				<p className="container-subtitle">
					You can always create another workplace later.
				</p>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						navigate("/plans");
					}}
					className="inputs-container"
				>
					<label className="input-label">Workspace Name</label>
					<input placeholder="Eden" required />
					<label className="input-label">
						Workplace URL <span className="optional">(optional)</span>
					</label>
					<div className="url-container">
						www.eden.com/
						<input className="url-input" placeholder="Example" required />
					</div>
					<button type="submit">Create Workspace</button>
				</form>
			</div>
		</>
	);
};
