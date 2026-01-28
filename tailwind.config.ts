import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#7c4dff",
                    dark: "#6d28d9",
                },
                accent: "#6d28d9",
                dark: {
                    bg: "#0f0f1a",
                    card: "#151528",
                },
                muted: {
                    gray: "#9ca3af",
                },
            },
            fontFamily: {
                caveat: ["var(--font-caveat)"],
                jost: ["var(--font-jost)"],
                roboto: ["var(--font-roboto)"],
            },
        },
    },
    plugins: [],
};

export default config;
