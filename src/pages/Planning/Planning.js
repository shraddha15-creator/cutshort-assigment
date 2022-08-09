import { useNavigate } from "react-router-dom";
import { CustomStepper } from "../../components/CustomStepper/CustomStepper";
import "./planning.css";

export const Planning = () => {
	const navigate = useNavigate();

	return (
		<>
			<CustomStepper step="3" />
			<div className="main-container">
				<h2 className="container-title">How are you planning to use Eden?</h2>
				<p className="container-subtitle">
					We'll streamline your setup experience accordingly.
				</p>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						navigate("/onboarding");
					}}
					className="plans-container"
				>
					<div className="plans">
						<div className="plans-item active">
							<i className="fas fa-user"></i>
							<p className="plans-title">For myself</p>
							<p className="plans-detail">
								Write better. Think more clearly. Stay organized.
							</p>
						</div>
						<div className="plans-item not-active">
							<i className="fas fa-users"></i>
							<p className="plans-title">With my team</p>
							<p className="plans-detail">
								Wikis, docs, tasks & projects, all in one place
							</p>
						</div>
					</div>

					<button type="submit">Create Workspace</button>
				</form>
			</div>
		</>
	);
};
