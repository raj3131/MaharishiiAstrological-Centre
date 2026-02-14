import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            fontFamily: {
                // serif: ["Samarkan", "serif"],
                serif: ["var(--font-cinzel)", "serif"],
                sans: ["var(--font-geist-sans)", "sans-serif"],
                // heading: ["Samarkan", "cursive"],
                heading: ["var(--font-cinzel)", "serif"],
                accent: ["var(--font-rozha)", "serif"],
            },
        },
    },
    plugins: [],
};
export default config;
