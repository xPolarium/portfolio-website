const Contact = () => {
	return (
		<div className="min-h-[60vh] flex items-center justify-center">
			<form className="flex flex-col items-center gap-3 bg-gray-300 px-2 py-4 rounded-lg">
				<div className="flex flex-col sm:flex-row gap-3">
					<label className="mx-2">
						Name: <input type="text" name="name" />
					</label>
					<label className="mx-2">
						Email: <input type="email" name="email" />
					</label>
				</div>

				<div className="flex flex-col">
					<label>Message:</label>
					<textarea name="message" className="h-48 sm:w-96" />
				</div>
				<input
					type="submit"
					value="Submit"
					className="px-4 py-1 bg-gray-600 rounded-full text-white"
				/>
			</form>
		</div>
	);
};

export default Contact;
