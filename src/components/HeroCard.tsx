import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";

const HeroCard = () => {
	return (
		<section className="min-h-screen">
			<div className="container mx-auto mt-72">
				<div className="flex sm:flex-col-reverse lg:flex-row sm:items-center justify-center gap-8 lg:gap-16 xl:gap-32">
					<div className="flex flex-col gap-4 font-body font-medium">
						<div className="font-body text-xl italic lg:text-2xl">
							Hey! My name is,
						</div>
						<div className="pl-10 font-header font-bold text-5xl lg:text-6xl xl:text-7xl">
							Miguel A. Torres
						</div>

						<div className="flex flex-col font-header sm:flex-row font-semibold text-xl lg:text-2xl xl:text-3xl self-center text-center">
							Software Engineer &&nbsp;Web Developer
						</div>
						<div className="flex gap-4 self-center text-xl">
							<a
								href="https://www.linkedin.com/in/mtorres1998"
								className="hover:opacity-60"
							>
								<BsLinkedin size="1.7rem" />
							</a>
							<a
								href="https://www.github.com/xpolarium"
								className="hover:opacity-60"
							>
								<BsGithub size="1.7rem" />
							</a>
							<a
								href="https://twitter.com/polarium_"
								className="hover:opacity-60"
							>
								<BsTwitter size="1.7rem" />
							</a>
						</div>
						<div className="self-center">
							<button className="bg-bright-orange px-6 py-2 rounded-full text-light-white mt-4 font-semibold font-header">
								See my work
							</button>
						</div>
					</div>

					<div className="hidden sm:block">
						<div className="w-96 h-96 bg-cover bg-miguel-selfie bg-center rounded-blob-default overflow-hidden animate-blob bg-light-grey"></div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroCard;
