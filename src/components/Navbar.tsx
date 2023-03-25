import { useState } from "react";

import { RiMoonClearFill, RiSunFill } from "react-icons/ri";
import { CgMenu } from "react-icons/cg";

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleDarkMode = () => {
		const theme = localStorage.getItem("theme");

		if (theme) {
			document.documentElement.classList.toggle("dark");
			localStorage.setItem("theme", theme == "dark" ? "light" : "dark");
		} else {
			if (document.documentElement.classList.contains("dark")) {
				document.documentElement.classList.remove("dark");
				localStorage.setItem("theme", "light");
			} else {
				document.documentElement.classList.add("dark");
				localStorage.setItem("theme", "dark");
			}
		}
	};

	return (
		<div>
			<nav className="w-full">
				<div className="container mx-auto py-5 flex justify-between px-4 items-center">
					<a href="/" className="text-4xl font-bold font-header">
						Miguel
					</a>
					<ul className="gap-4 items-center hidden sm:flex font-semibold text-lg">
						<li className="hover:opacity-60">
							<a href="#">Home</a>
						</li>
						<li className="hover:opacity-60">
							<a href="#">Projects</a>
						</li>
						<li className="hover:opacity-60">
							<a href="#">Skills</a>
						</li>
						<li className="hover:opacity-60">
							<a href="#">Contact</a>
						</li>
						<li className="hover:opacity-60 outline-bright-orange text-bright-orange dark:text-light-white">
							<a
								className="px-6 py-2 rounded-full outline outline-2 dark:outline-none dark:bg-bright-orange"
								href="#"
							>
								Blog
							</a>
						</li>
						<li className="flex rounded-full p-1 outline outline-2 outline-bright-orange text-bright-orange dark:outline-none bg-neutral-400 dark:bg-bright-orange dark:text-light-white text-white hover:opacity-60">
							<button onClick={() => toggleDarkMode()}>
								<RiMoonClearFill className="cursor-pointer text-2xl hidden dark:block" />

								<RiSunFill className="cursor-pointer text-2xl dark:hidden" />
							</button>
						</li>
					</ul>

					<button
						onClick={() => setMenuOpen(!menuOpen)}
						className="py-0.5 px-1 bg-bright-orange text-light-white rounded shadow sm:hidden hover:bg-opacity-60"
					>
						<CgMenu className="text-3xl"></CgMenu>
					</button>
				</div>
			</nav>
			<div
				className={`${
					menuOpen ? "block" : "hidden"
				} flex flex-col w-full bg-gray-300 sm:hidden absolute dropdown_menu font-header font-semibold`}
			>
				<a
					href="/"
					className="py-3 px-2 bg-bright-orange hover:bg-opacity-60"
				>
					Home
				</a>
				<a
					href="/"
					className="py-3 px-2 bg-bright-orange hover:bg-opacity-60"
				>
					Projects
				</a>
				<a
					href="/"
					className="py-3 px-2 bg-bright-orange hover:bg-opacity-60"
				>
					Skills
				</a>
				<a
					href="/"
					className="py-3 px-2 bg-bright-orange hover:bg-opacity-60"
				>
					Contact
				</a>
				<a
					href="/"
					className="py-3 px-2 bg-bright-orange hover:bg-opacity-60"
				>
					Blog
				</a>
			</div>
		</div>
	);
};

export default Navbar;
