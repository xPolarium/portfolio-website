const Skills = () => {
	const languages = [
		["TypeScript", "/ts-logo.svg"],
		["Python", "/python-logo.svg"],
		["C++", "/cplus-logo.svg"],
		["C#", "/csharp-logo.svg"],
		["Rust", "/rust-logo.svg"],
		["JavaScript", "/js-logo.svg"],
	];

	const technology = [
		["HTML", "/html-logo.svg"],
		["CSS", "/css-logo.svg"],
		["React", "/react-logo.svg"],
		["NextJS", "/nextjs-logo.svg"],
		["Github", "/github-logo.svg"],
		["Tailwind", "/tailwind-logo.svg"],
		["AWS", "/aws-logo.svg"],
		["Linux", "/linux-logo.svg"],
	];

	const databases = [
		["MongoDB", "/mongodb-logo.svg"],
		["Firebase", "/firebase-logo.svg"],
		["PostgreSQL", "/postgresql-logo.svg"],
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
