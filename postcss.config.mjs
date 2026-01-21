<<<<<<< HEAD
/** @type {import('postcss').ProcessOptions} */
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
export default config;
=======
/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
>>>>>>> 2759ad140b90453d3eb3f0d8acc9336936e51c59
