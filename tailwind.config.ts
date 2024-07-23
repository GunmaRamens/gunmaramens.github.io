import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx,html,astro}"],
    theme: {},
    plugins: [require("@tailwindcss/typography")],
};
export default config;
