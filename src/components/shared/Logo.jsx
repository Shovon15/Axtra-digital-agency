
import { Link } from "react-router-dom";
import logoImage from "../../assets/logo-black.png"
const Logo = () => {
	return (
		<div className="w-36 h-full flex justify-center items-center">
			<Link to="/" className="cursor-pointer px-0">
				<img src={logoImage} alt="logo" className="w-full h-full" />
			</Link>
		</div>
	);
};

export default Logo;
