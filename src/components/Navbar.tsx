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
							<a href="/">Home</a>
						</li>
						<li className="hover:opacity-60">
							<a href="#projects">Projects</a>
						</li>
						<li className="hover:opacity-60">
							<a href="#skills">Skills</a>
						</li>
						<li className="hover:opacity-60">
							<a href="#contact">Contact</a>
						</li>
						<li className="hover:opacity-60">
							<a
								className="bg-bright-orange px-6 py-2 rounded-full text-light-white"
								href="#"
							>
								Blog
							</a>
						</li>
						<li className="flex bg-bright-orange p-1 rounded-full text-light-white text-2xl">
							<button onClick={() => toggleDarkMode()}>
								<RiMoonClearFill className="hidden dark:block" />

								<RiSunFill className="dark:hidden" />
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
