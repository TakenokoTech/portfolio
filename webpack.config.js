const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const DEBUG = true;

module.exports = {
    mode: 'production',

    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

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
            { test: /\.(scss|sass)$/, use: [DEBUG ? 'style-loader' : MiniCssExtractPlugin.loader, "css-loader", "sass-loader"] },
            { test: /\.html$/, use: [{ loader: 'html-loader', options: { minimize: true } }] },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        new FaviconsWebpackPlugin('./src/asset/grass_b.png')
    ],

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },

    performance: { hints: false } 
};