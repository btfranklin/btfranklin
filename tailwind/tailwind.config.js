/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['../docs/**/*.{html,js}'],
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
