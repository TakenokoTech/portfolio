// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

const autoprefixer = require('autoprefixer')
const postcssLoader = { loader: 'postcss-loader', options: { plugins: [autoprefixer({ grid: true })] } }

module.exports = {
  plugins: [
    // your custom plugins
  ],

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      // A loader for webpack which transforms files into base64 URIs.
      { test: /\.(pdf|jpg|png|gif|svg|ico)$/, use: [{ loader: 'url-loader', options: { name: './[path][name]-[hash:8].[ext]' } }] },

      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

      // Loads a Sass/SCSS file and compiles it to CSS.
      { test: /\.(scss|sass)$/, use: ['style-loader', "css-loader", postcssLoader, "sass-loader"] },
      { test: /\.html$/, use: [{ loader: 'html-loader', options: { minimize: true } }] },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
    ],
  },
};
