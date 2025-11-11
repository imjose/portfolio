/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                console: ['Console', ...defaultTheme.fontFamily.mono],
            },
            colors: {
                dos: {
                    background: '#0d0e11',   // Deep black-blue background
                    panel: '#0104a3',        // Main blue window color
                    accent: '#2744ac',       // Menu highlight blue
                    cyan: '#4ca2a8',         // Text highlights / borders
                    light: '#7ac3c3',        // Lighter cyan highlights
                    teal: '#365559',         // Dim teal-gray accent
                    yellow: '#e6c032',       // Yellow accent color
                },
            }
        }
    }
};
