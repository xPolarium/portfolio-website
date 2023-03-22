const ProjectCard = () => {
	return (
		<div className="rounded-md h-48 w-72 items-center flex">
			<img
				src="/portfolio-image.png"
				alt=""
				width={1878}
				height={1039}
				className="object-cover hover:animate-grow rounded-md"
			></img>
		</div>
	);
};

const Projects = () => {
	return (
		<div className="container mx-auto my-12 lg:flex lg:justify-center">
			<div className="grid md:grid-cols-2 justify-items-center gap-12">
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</div>
		</div>
	);
};

export default Projects;
