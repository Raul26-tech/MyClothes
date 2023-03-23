/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'theme-green': {
                    50: '#9cd349',
                    '50-hover': '#b6d86f',
                },
                'theme-blue': {
                    50: '#328de8',
                    '50-hover': '#3DA2FF',
                },
            },
            fontFamily: {
                roboto: 'Roboto',
                montserrat: 'Montserrat',
            },
        },
    },
    plugins: [],
};
