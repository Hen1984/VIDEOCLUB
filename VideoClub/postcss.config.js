//postcss.config.js

const tailwindcss = require("tailwindcss");

const cssnano = require("cssnano")({ preset: 'default', });

// only needed if you want to purge
const purgecss = require("@fullhuman/postcss-purgecss")({
    content: ["./src/**/*.svelte", "./public/**/*.html"],
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

const tailwindcss = require('tailwindcss');
const autoprefixer = require("autoprefixer");
module.exports = {
  plugins: [ 
    require("tailwindcss"), 
    require("autoprefixer")
  ]
} 