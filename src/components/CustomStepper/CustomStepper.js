import Stepper from "react-stepper-horizontal/lib/Stepper";
import "./customStepper.css";

export const CustomStepper = ({ step }) => {
	return (
		<div className="custom-stepper">
			<Stepper
				steps={[{ title: "" }, { title: "" }, { title: "" }, { title: "" }]}
				activeStep={step}
				activeColor="#664DE5"
				completeColor="#664DE5"
				completeBarColor="#697489"
			/>
		</div>
	);
};
