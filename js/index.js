/** @format */

const sass = require('sass');

const result = sass.compile('style.scss');
console.log(result.css);

const compressed = sass.compile('style.scss', { style: 'compressed' });
console.log(compressed.css);
