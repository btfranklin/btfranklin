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
    darkMode: 'media', // Activate dark mode based on the viewer's OS setting
    plugins: [],
}
