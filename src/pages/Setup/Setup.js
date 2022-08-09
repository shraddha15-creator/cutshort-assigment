import { CustomStepper } from "../../components/CustomStepper/CustomStepper";

export const Setup = () => {
	return (
		<>
			<CustomStepper step="2" />
			<div>
				<h2>Let's set up a home for all your work</h2>
				<p>You can always create another workplace later.</p>
				<div className="inputs-container">
					<label>
						Workplace Name
						<input placeholder="Steve Jobs" required />
					</label>
					<label>
						Workplace URL <span>(optional)</span>
						<input placeholder="Steve" required />
					</label>
				</div>
				<button>Create Workspace</button>
			</div>
		</>
	);
};
