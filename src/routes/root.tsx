import Navbar from "../components/Navbar";
import HeroCard from "../components/HeroCard";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Root() {
	return (
		<div className="text-mid-grey dark:bg-dark-grey dark:text-light-white bg-light-white">
			<Navbar />
			<HeroCard />
			<About />
			<Projects />
			<Skills />
			<Contact />
			<Footer />
		</div>
	);
}

export default Root;
