import { CustomStepper } from "../../components/CustomStepper/CustomStepper";
import "./onboarding.css";

export const Onboarding = () => {
	return (
		<>
			<CustomStepper step="4" />
			<div className="main-container">
				<i className="fas fa-check-circle onboarding-icon"></i>

				<h2 className="container-title">Congratulations, Eren!</h2>
				<p className="container-subtitle">
					You have completed onboarding, you can start using Eden!
				</p>

				<button>Launch Eden</button>
			</div>
		</>
	);
};
