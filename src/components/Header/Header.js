import "./header.css";
import brandLogo from "../../assets/logo.png";

export const Header = () => {
	return (
		<div className="header">
			<img src={brandLogo} alt="brand-logo" className="brand-logo" />
			<div className="brand-name">Eden</div>
		</div>
	);
};
