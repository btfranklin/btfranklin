/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./site/**/*.{html,njk,md,js}', './docs/**/*.{html,js}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
        },
    },
    darkMode: 'class', // Site intentionally forces dark mode on top-level pages
    plugins: [],
}
