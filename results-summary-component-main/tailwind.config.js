/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}', './**/*.{html,js}'],
    theme: {
        extend: {
            colors: {
                'light-red': 'hsl(0, 100%, 67%)',
                'orangey-yellow': 'hsl(39, 100%, 56%)',
                'green-teal': 'hsl(166, 100%, 37%)',
                'cobalt-blue': 'hsl(234, 85%, 45%)',

                'light-slate-blue-bg': 'hsl(252, 100%, 67%)',
                'light-royal-blue-bg': 'hsl(241, 81%, 54%)',
                'violet-blue-circle': 'hsla(256, 72%, 46%, 1)',
                'persian-blue-circle': 'hsla(241, 72%, 46%, 0)',

                white: 'hsl(0, 0%, 100%)',
                'pale-blue': 'hsl(221, 100%, 96%)',
                'light-lavender': 'hsl(241, 100%, 89%)',
                'dark-gray-blue': 'hsl(224, 30%, 27%)',
            },
            fontFamily: {
                hankengrotesk: ['HankenGrotesk', 'sans-serif'],
            },
            boxShadow: {
                'card-shadow': ' 0px 30px 60px 0px rgba(61, 108, 236, 0.15)',
            },
            borderRadius: {
                'small-radius-card': '0px 0px 32px 32px',
                'big-right-radius-card': '32px 32px 0px 0px',
                'big-radius-card': '32px 32px 32px 32px',
            },
        },
    },
    plugins: [],
}
