/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: 'rgb(1, 96, 178)',
                secondary: 'rgb(247, 103, 62)',
                success: 'rgb(50, 125, 5, 0.8)',
                danger: 'rgba(178,34,34, 0.8)',
                warning: 'rgba(255,215,0, 0.8)',
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
