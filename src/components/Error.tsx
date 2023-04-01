import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const Error = () => {
	const error = useRouteError();

	if (isRouteErrorResponse(error))
		return (
			<div className="flex flex-col min-h-screen justify-center items-center font-body text-dark-grey dark:bg-dark-grey dark:text-light-white">
				<h1 className="font-header text-bright-orange font-bold text-6xl">
					Oops!
				</h1>
				<p className="text-lg mb-6 mt-4">
					Sorry, an unexpected error has occurred.
				</p>
				<p className="text-4xl font-semibold font-header">
					<i>{error.status || error.statusText}</i>
				</p>
			</div>
		);

	return <p>Unknown Error</p>;
};

export default Error;
