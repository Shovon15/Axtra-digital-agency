import { useEffect, useState } from "react";
import { BiUpArrowAlt } from "react-icons/bi";

const ScrollButton = () => {
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {

		window.addEventListener("scroll", () => setScrollPosition(Math.round(window.scrollY)));

		return () => {
			window.removeEventListener("scroll", () => setScrollPosition(Math.round(window.scrollY)));
		};
	}, []);

	const handleScroll = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};
	return (
		<button
			onClick={handleScroll}
			style={{ zIndex: "999" }}
			className={`fixed  bottom-5 right-5 bg-color-secondary text-color-primary
              rounded-full px-2 py-2 shadow-md hover:shadow-xl hover:text-color-header ${scrollPosition > 50 ? "block " : "hidden"
				}`}
		>
			<BiUpArrowAlt className="text-2xl text-white" />
		</button>
	);
};

export default ScrollButton;
