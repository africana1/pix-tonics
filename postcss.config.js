const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');

// module.exports = {
//   plugins: [tailwindcss('./tailwind.js'), require('autoprefixer')],
// };

module.exports = {
  plugins: [require('postcss-import'), require('tailwindcss'), require('autoprefixer')],
};
