import { GoMailRead } from "react-icons/go";
import { BsDiscord } from "react-icons/bs";

const Contact = () => {
	return (
		<div className="mt-60">
			<div className="container mx-auto max-w-5xl font-body">
				<div
					id="portfolio"
					className="text-2xl font-header font-semibold text-bright-orange mb-8"
				>
					Contact
				</div>
				<div className="flex gap-16">
					<div className="flex items-center gap-4">
						<div className="rounded-full bg-light-white shadow-md p-4 flex justify-center items-center">
							<GoMailRead
								size="2.7rem"
								className="text-dark-grey"
							/>
						</div>
						<div>
							<h3 className="text-bright-orange font-header font-semibold text-2xl">
								Mail
							</h3>
							<a
								href="mailto:mikeajr@icloud.com"
								className="text-dark-grey dark:text-light-white hover:opacity-60 text-xl"
							>
								mikeajr@icloud.com
							</a>
						</div>
					</div>
					<div className="flex items-center gap-4">
						<div className="rounded-full bg-light-white shadow-md p-4 flex justify-center items-center">
							<BsDiscord
								size="2.7rem"
								className="text-dark-grey"
							/>
						</div>
						<div>
							<h3 className="text-bright-orange font-header font-semibold text-2xl">
								Discord
							</h3>
							<button
								className="text-dark-grey dark:text-light-white hover:opacity-60 text-xl clipboard"
								data-clipboard-text="Polarium#5284"
								onClick={() => alert("Copied to clipboard!")}
							>
								Polarium#5284
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
