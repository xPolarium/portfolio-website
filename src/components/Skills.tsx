const Skills = () => {
	const skillsList = [
		"TypeScript/JS",
		"Python",
		"C++",
		"C#",
		"Java",
		"HTML/CSS",
		"React",
		"NextJS",
		"PostgreSql",
		"MongoDB",
		"Firebase",
		"Git/Github",
		"Linux",
		"CI/CD",
	];

	return (
		<div className="my-20 md:mx-auto md:w-1/2 flex flex-col items-center">
			<h1 className="mb-4 text-xl font-bold">My Skills</h1>
			<div className="grid grid-flow-col grid-cols-3 grid-rows-5 dark:text-white gap-x-8">
				{skillsList.map((skill) => (
					<div key={skill} className="mb-2 text-center text-sm">
						{skill}
					</div>
				))}
			</div>
		</div>
	);
};

export default Skills;
