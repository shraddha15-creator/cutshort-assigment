import { CustomStepper } from "../../components/CustomStepper/CustomStepper";
import "./welcome.css";
export const Welcome = () => {
	return (
		<>
			<CustomStepper step="1" />
			<div>
				<h2>Welcome! First things first...</h2>
				<p>You can always change them later.</p>
				<div className="inputs-container">
					<label>
						Full Name
						<input placeholder="Steve Jobs" required />
					</label>
					<label>
						Display Name
						<input placeholder="Steve" required />
					</label>
				</div>
				<button>Create Workspace</button>
			</div>
		</>
	);
};
