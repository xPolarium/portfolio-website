/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			keyframes: {
				grow: {
					"100%": { transform: "scale(1.1)" },
				},

				blob: {
					"0%, 100%": {
						"border-radius": "42% 56% 72% 28% / 42% 42% 56% 48%",
					},

					"33%": {
						"border-radius": "42% 28% 48% 48% / 28% 28% 72% 72%",
					},

					"66%": {
						"border-radius":
							"100% 56% 56% 100% / 100% 100% 56% 56%",
					},
				},
			},

			animation: {
				grow: "grow .1s ease-out forwards",
				blob: "blob 16s linear infinite",
			},

			backgroundImage: {
				"miguel-selfie": "url('/myself.jpg')",
			},

			borderRadius: {
				"blob-default": "42% 56% 72% 28% / 42% 42% 56% 48%",
			},
		},
		colors: {
			"dark-grey": "#222831",
			"light-grey": "#393E46",
			"bright-orange": "#D65A31",
			"light-white": "#EEEEEE",
		},

		fontFamily: {
			header: ["Poppins", "system-ui", "sans-serif"],
			body: ["Mullish", "system-ui", "sans-serif"],
		},
	},
	plugins: [],

	darkMode: "class",
};
