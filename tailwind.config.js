/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                // 'main-background': 'repeating-linear-gradient(var(--tw-gradient-stops))',
                "main-background": `repeating-linear-gradient(
              0deg,
              background-main,
              background-secondary 10px,
            )`,
            },
            rotate: {
                270: "270deg",
            },
            colors: {
                "background-main": "#0D1B30",
                "background-secondary": "#104237",
                "background-main2": "#091820",
                "base-pink": "#F24081",
                // "base-green": "#3AB795",
                // "base-green": "#00CCBE",
                // "base-green": "#03B5AA",
                "base-green": "#28AFB0",
                "base-blue": "#1D779A",
                "base-green-100": "rgba(58, 183, 149, .1)",
                "base-persian": "#1B998B",
                "base-white": "#FBFBFF",
                "base-white-100": "rgba(251, 251, 255, .1)",
                "base-white-500": "rgba(251, 251, 255, .5)",
                "base-white-600": "rgba(251, 251, 255, .6)",
                "base-white-650": "rgba(251, 251, 255, .65)",
                "base-white-700": "rgba(251, 251, 255, .7)",
                "base-white-700": "rgba(251, 251, 255, .75)",
                "base-white-800": "rgba(251, 251, 255, .8)",
                "base-white-850": "rgba(251, 251, 255, .85)",
            },
            animation: {
                fade: "fade 1s ease infinite",
                blob: "blob 10s linear infinite",
            },
            boxShadow: {
                cursor: "0 0 300px 150px",
            },
            keyframes: {
                fade: {
                    from: {opacity: 1},
                    to: {opacity: 0},
                },
                blob: {
                    "0%, 100%": {
                        "border-radius": "40% 60% 70% 30% / 45% 45% 50% 50%",
                        transform: "translate3d(0,0,0) rotateZ(0.01deg)",
                    },
                    "35%": {
                        "border-radius": "70% 30% 46% 54% / 30% 29% 71% 70%",
                        transform: "translate3d(0,5px,0) rotateZ(0.01deg)",
                    },
                    "50%": {
                        transform: "translate3d(0,0,0) rotateZ(0.01deg)",
                    },
                    "75%": {
                        "border-radius":
                            "100% 40% 40% 100% / 100% 100% 40% 40%",
                        transform: "translate3d(0,-3px,0) rotateZ(0.01deg)",
                    },
                },
            },
            opacity: {
                text: "40%",
            },
        },
    },
    plugins: [
        "prettier-plugin-tailwindcss",
        plugin(function ({addUtilities}) {
            addUtilities({
                ".text-rotate": {
                    "writing-mode": "vertical-rl",
                    "text-orientation": "mixed",
                },
                ".-rotate-z-12": {
                    transform: "rotateZ(-12deg)",
                },
                ".-rotate-z-6": {
                    transform: "rotateZ(-6deg)",
                },
            });
        }),
    ],
};
