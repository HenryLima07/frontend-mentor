import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx, css, html}',
        './components/**/*.{js,ts,jsx,tsx,mdx, css, html}',
        './app/**/*.{js,ts,jsx,tsx,mdx, css, html}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
        colors: {
            purple: 'hsl(259, 100%, 65%)',
            'light-red': 'hsl(0, 100%, 67%)',
            white: 'hsl(0, 0%, 100%)',
            'off-white': 'hsl(0, 0%, 94%)',
            'light-grey': 'hsl(0, 0%, 86%)',
            'smokey-grey': 'hsl(0, 1%, 44%)',
            'off-black': 'hsl(0, 0%, 8%)',
        },
        fontSize: {
            input: '32px',
        },
        fontWeight: {
            normal: '400',
            'semi-bold': '700',
            bold: '800',
            extrabold: '800',
        },
        screens: {
            sm: { max: '445px' },
            md: { min: '446px' },
            lg: '675px',
            xsm: { max: '342px' },
        },
        fontFamily: {
            poppins: 'poppins',
        },
        dropShadow: {
            'text-shadow': '0px 4px 4px rgba(0, 0, 0, 0.25)',
        },
    },
    plugins: [],
}
export default config
