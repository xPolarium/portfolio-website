import { useState } from "react";

import Navbar from "./components/Navbar";
import HeroCard from "./components/HeroCard";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
	return (
		<div className="text-mid-grey dark:bg-dark-grey dark:text-light-white bg-light-white">
			<Navbar />
			<HeroCard />
			<About />
			<Projects />
			<Skills />
			<Contact />
		</div>
	);
}

export default App;
