import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";

const HeroCard = () => {
	return (
		<div className="min-h-screen">
			<div className="container mx-auto mt-40">
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
							<a href="">
								<BsLinkedin size="1.3rem" />
							</a>
							<a href="">
								<BsGithub size="1.3rem" />
							</a>
							<a href="">
								<BsTwitter size="1.3rem" />
							</a>
						</div>
						<div className="self-center">
							<button className="bg-bright-orange px-6 py-1 rounded-full text-light-white">
								see my work
							</button>
						</div>
					</div>

					<div className="hidden sm:block">
						<div className="w-64 h-64 bg-cover bg-miguel-selfie bg-center rounded-blob-default overflow-hidden animate-blob"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroCard;
