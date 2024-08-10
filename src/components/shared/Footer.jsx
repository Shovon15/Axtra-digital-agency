import { Typography } from "@material-tailwind/react";
import logo from "../../assets/logo-white.png"
import { Link } from "react-router-dom";

const LINKS = [
	{
		title: "Product",
		items: ["Overview", "Features", "Solutions", "Tutorials"],
	},
	{
		title: "Company",
		items: ["About us", "Careers", "Press", "News"],
	},
	{
		title: "Resource",
		items: ["Blog", "Newsletter", "Events", "Help center"],
	},
];

const currentYear = new Date().getFullYear();

const Footer = () => {
	return (
		<footer className="relative w-full bg-color-secondary py-5 md:py-10">
			<div className="mx-auto w-full max-w-7xl px-8">
				<div className="flex flex-col md:flex-row justify-between gap-5">
					<div className="max-w-80 md:w-1/4">
						<img src={logo} alt="logo" className="w-28 h-10" />
						<p className="text-white py-5 text-sm">When do they work well, and when do they on us and finally, when do we actually need how can we avoid them.</p>
					</div>
					<div className="grid grid-cols-3 justify-between gap-4 md:w-3/4 md:px-10">
						{LINKS.map(({ title, items }) => (
							<ul key={title}>
								<p className="mb-3 font-medium opacity-70 text-gray-400">{title}</p>
								{items.map((link) => (
									<li key={link}>
										<p className="py-1.5 font-normal transition-colors text-white hover:text-blue-gray-900 cursor-pointer">
											{link}
										</p>
									</li>
								))}
							</ul>
						))}
					</div>
				</div>
				<div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
					<Typography variant="small" className="mb-4 text-center font-normal text-white md:mb-0">
						&copy; {currentYear}  All Rights Reserved.
					</Typography>
					<div className="flex gap-7">
						<Link to="/">
							<p className=" text-lg text-color-secondary hover:text-color-header py-3">
								About Us
							</p>
						</Link><Link to="/">
							<p className=" text-lg text-color-secondary hover:text-color-header py-3">
								Contact
							</p>
						</Link><Link to="/">
							<p className=" text-lg text-color-secondary hover:text-color-header py-3">
								Career
							</p>
						</Link><Link to="/">
							<p className=" text-lg text-color-secondary hover:text-color-header py-3">
								Faqs
							</p>
						</Link>
					</div>


				</div>
			</div>
		</footer>
	);
};

export default Footer;
