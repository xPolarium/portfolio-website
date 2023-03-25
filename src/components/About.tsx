const About = () => {
	return (
		<div className="pb-60">
			<div className="font-body container mx-auto max-w-5xl">
				<div className="flex items-center gap-16">
					<img
						src="/self-removed-bg.png"
						alt="me"
						className="w-[26rem] bg-light-grey rounded-2xl"
					/>
					<div className="flex flex-col gap-4">
						<h4 className="text-2xl font-header font-semibold text-bright-orange">
							About me
						</h4>
						<h3 className="text-3xl font-header font-bold dark:text-light-white">
							An ambitious Software Developer learning new things
							everyday
						</h3>
						<p className="text-lg">
							I graduated with a B.S. in Computer Science from the
							University of Texas Rio Grande Valley in 2021. My
							primary interests are software and web development
							with some game development on the side. I spend much
							of my freetime pushing my programming skills forward
							with Leetcode, working on personal and open-source
							projects, or learning new technologies.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
