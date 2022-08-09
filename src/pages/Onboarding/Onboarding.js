import React from "react";
import { CustomStepper } from "../../components/CustomStepper/CustomStepper";

export const Onboarding = () => {
	return (
		<>
			<CustomStepper step="4" />
			<div>
				<div>✔️</div>
				<h2>Congratulations, Eren!</h2>
				<p>You have completed onboarding, you can start using Eden!</p>

				<button>Launch Eden</button>
			</div>
		</>
	);
};
