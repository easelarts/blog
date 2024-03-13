/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				'librebaskerville': ['LibreBaskerville', 'sans-serif'],
			},
			colors: {
				light: {
					primary: '#479c9c',
					secondary: '#FE6D73',
					accent: '#6247AA',
					neutral: '#EBEBEB',
					text: '#3C493F',
				},
				dark: {
					primary: '#59C3C3',
					secondary: '#FE6D73',
					accent: '#6247AA',
					neutral: '#30364A',
					text: '#EBEBEB',
				},
			},
		},
	},
	variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
    },
  },
	plugins: [],
}
