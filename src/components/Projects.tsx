import { BsGithub } from "react-icons/bs";

const ProjectCard = () => {
	return (
		<div className="flex p-6 gap-6 dark:bg-light-grey rounded-2xl">
			<a
				href="/"
				className="rounded-2xl overflow-hidden h-auto w-[53rem]"
			>
				<img
					src="/portfolio-image.png"
					alt="my old portfolio project"
				/>
			</a>
			<div className="flex flex-col items-center justify-around gap-4 w-[40rem]">
				<h3 className="text-3xl font-header font-bold dark:text-light-white">
					Old Portfolio Site
				</h3>
				<p className="text-center text-lg">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Assumenda, maxime itaque optio magni, dolore sed
					consequuntur autem quas, aliquam blanditiis aspernatur dicta
					ad? Amet debitis architecto, autem voluptatibus assumenda
					mollitia?
				</p>
				<div>
					<a href="/" className="flex items-center">
						<p className="mr-2 font-header font-semibold text-xl">
							Code
						</p>
						<BsGithub size="1.7rem" />
					</a>
				</div>
			</div>
		</div>
	);
};

const Projects = () => {
	return (
		<div className="my-60">
			<div className="container mx-auto max-w-5xl font-body">
				<div
					id="portfolio"
					className="text-2xl font-header font-semibold text-bright-orange mb-16"
				>
					Portfolio
				</div>
				<div className="flex flex-col gap-10">
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
				</div>
			</div>
		</div>
	);
};

export default Projects;
