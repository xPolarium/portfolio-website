import { BsGithub } from "react-icons/bs";

type Project = {
	title: string;
	description: string;
	image: string;
	link: string;
};

const ProjectCard = ({ title, description, image, link }: Project) => {
	return (
		<div className="flex p-6 gap-6 dark:bg-light-grey rounded-2xl flex-col lg:flex-row">
			<a
				href={link}
				target="_blank"
				className="rounded-2xl overflow-hidden h-full lg:w-[53rem]"
			>
				<img
					src={image}
					alt="my old portfolio project"
					className="hover:blur-sm"
				/>
			</a>
			<div className="flex flex-col items-center justify-around gap-4 lg:w-[40rem]">
				<h3 className="text-3xl font-header font-bold dark:text-light-white">
					{title}
				</h3>
				<p className="text-center text-md">{description}</p>
				<div>
					<a
						href={link}
						target="_blank"
						className="flex items-center hover:opacity-60"
					>
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
	const projects = [
		{
			title: "This portfolio website",
			description:
				"I built this website to showcase my resume and my ability to deploy a front/backend in general. I've also included a blog where I share software related things that I've learned. The site is hosted using AWS services, and the frontend was primarily built with TypeScript and React with libraries such as Tailwind for the design.",
			link: "https://github.com/xPolarium/portfolio-website",
			image: "/project-portfolio-website.png",
		},
	];

	return (
		<section id="projects" className="mb-60">
			<div className="container mx-auto max-w-5xl font-body px-4">
				<div
					id="portfolio"
					className="text-2xl font-header font-semibold text-bright-orange mb-16"
				>
					Projects
				</div>
				<div className="flex flex-col gap-10">
					{projects.map((proj) => (
						<ProjectCard {...proj}></ProjectCard>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
