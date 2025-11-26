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
    darkMode: 'class', // Activate dark mode manually
    plugins: [],
}
