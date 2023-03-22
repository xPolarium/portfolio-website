import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";
import { useEffect } from "react";

const HeroCard = () => {
	return (
		<div className="flex justify-center items-center min-h-screen">
			<div className="container mx-auto">
				<div className="flex justify-center md:gap-8 lg:gap-16 xl:gap-32">
					<div className="flex flex-col gap-4 place-self-end">
						<div className="italic text-xl">Hey there!</div>
						<div className="font-bold text-3xl capitalize">
							<div>I am,</div>
							<div className="pl-10">Miguel A. Torres</div>
						</div>

						<div className="flex flex-col sm:flex-row uppercase font-semibold text-xl self-center text-center">
							Software Engineer &&nbsp;
							<span>Web Developer</span>
						</div>
						<div className="flex gap-4 self-center">
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
							<button className="bg-neutral-500 px-6 py-1 rounded-full text-white">
								see my work
							</button>
						</div>
					</div>

					<div className="">
						<div className="w-64 h-64 bg-cover bg-miguel-selfie bg-center rounded-blob-default overflow-hidden animate-blob"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroCard;
