const Skills = () => {
	const languages = [
		["TypeScript", "/logos/ts-logo.svg"],
		["Python", "/logos/python-logo.svg"],
		["C++", "/logos/cplus-logo.svg"],
		["C#", "/logos/csharp-logo.svg"],
		["Rust", "/logos/rust-logo.svg"],
		["JavaScript", "/logos/js-logo.svg"],
	];

	const technology = [
		["HTML", "/logos/html-logo.svg"],
		["CSS", "/logos/css-logo.svg"],
		["React", "/logos/react-logo.svg"],
		["NextJS", "/logos/nextjs-logo.svg"],
		["Github", "/logos/github-logo.svg"],
		["Tailwind", "/logos/tailwind-logo.svg"],
		["AWS", "/logos/aws-logo.svg"],
		["Linux", "/logos/linux-logo.svg"],
	];

	const databases = [
		["MongoDB", "/logos/mongodb-logo.svg"],
		["Firebase", "/logos/firebase-logo.svg"],
		["PostgreSQL", "/logos/postgresql-logo.svg"],
	];

	return (
		<section id="skills" className="container mx-auto max-w-5xl px-4">
			<div className="text-2xl font-header font-semibold text-bright-orange mb-8">
				Skills
			</div>
			<div className="flex flex-col gap-8">
				<div>
					<div
						id="skills"
						className="text-2xl font-header font-semibold text-dark-grey dark:text-light-white mb-2"
					>
						Languages
					</div>
					<ul className="flex flex-wrap gap-4">
						{languages.map(([name, src], idx) => (
							<li className="rounded-full bg-light-white shadow-md w-20 h-20 p-4 flex justify-center items-center">
								<img src={src} alt={name} />
							</li>
						))}
					</ul>
				</div>

				<div>
					<div
						id="skills"
						className="text-2xl font-header font-semibold text-dark-grey dark:text-light-white mb-2"
					>
						Technology
					</div>
					<ul className="flex flex-wrap gap-4">
						{technology.map(([name, src], idx) => (
							<li className="rounded-full bg-light-white shadow-md w-20 h-20 p-4 flex justify-center items-center">
								<img src={src} alt={name} />
							</li>
						))}
					</ul>
				</div>

				<div>
					<div
						id="skills"
						className="text-2xl font-header font-semibold text-dark-grey dark:text-light-white mb-2"
					>
						Databases
					</div>
					<ul className="flex flex-wrap gap-4">
						{databases.map(([name, src], idx) => (
							<li className="rounded-full bg-light-white shadow-md w-20 h-20 p-4 flex justify-center items-center">
								<img src={src} alt={name} />
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Skills;
