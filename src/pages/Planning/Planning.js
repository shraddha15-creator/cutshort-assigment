import { CustomStepper } from "../../components/CustomStepper/CustomStepper";

export const Planning = () => {
	return (
		<>
			<CustomStepper step="3" />
			<div>
				<h2>How are you planning to use Eden?</h2>
				<p>We'll streamline your setup experience accordingly.</p>
				<div className="">
					<div>
						<p>icon</p>
						<p>details</p>
					</div>
					<div>
						<p>icon</p>
						<p>details</p>
					</div>
				</div>
				<button>Create Workspace</button>
			</div>
		</>
	);
};
