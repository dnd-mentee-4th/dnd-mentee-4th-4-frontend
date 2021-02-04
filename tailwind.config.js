const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: ['./src/**/*.js', './src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-gradients'),
    require('tailwindcss-pseudo-elements'),
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.clickable': {
          position: 'relative',
          cursor: 'pointer',
          'user-select': 'none',

          // ':active:after': {
          //   position: 'absolute',
          //   top: 0,
          //   left: 0,
          //   right: 0,
          //   bottom: 0,
          //   borderColor: 'red',
          // },
        },
      };

      addUtilities(newUtilities, ['before', 'after']);
    }),
  ],
};
