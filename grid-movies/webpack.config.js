const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const deps = require("./package.json").dependencies;

module.exports = {
    entry: "./src/index.ts",
    mode: "development",
    devServer: {
        port: 3002,
        open: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)$/,
                loader: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ["style-loader", {
                    loader: "css-loader",
                    options: {
                        url: {
                            filter: (url) => {
                                // Semantic-UI-CSS has an extra semi colon in one of the URL due to which CSS loader along
                                // with webpack 5 fails to generate a build.
                                // Below if condition is a hack. After Semantic-UI-CSS fixes this, one can replace use clause with just
                                // use: ['style-loader', 'css-loader']
                                if (url.includes('charset=utf-8;;')) {
                                    return false;
                                }
                                return true;
                            },
                        }
                    }
                }],

            },   // this rule handles images
            {
                test: /\.jpe?g$|\.gif$|\.ico$|\.png$|\.svg$/,
                use: 'file-loader?name=[name].[ext]?[hash]'
            },

            // the following 3 rules handle font extraction
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [{
                    loader: 'url-loader', options: { limit: 100000 }
                }]
            },

            {
                test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            },
            {
                test: /\.otf(\?.*)?$/,
                use: 'file-loader?name=/fonts/[name].  [ext]&mimetype=application/font-otf'
            }
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "gridmovies",
            filename: "remoteEntry.js",
            remotes: {
                gridmovies: "gridmovies@http://localhost:3002/remoteEntry.js",
            },
            exposes: {
                // expose each component
                "./GridMovies": "./src/components/GridMovies/GridMovies",
                "./movies": "./src/api/movies.js",
            },
            shared: {
                ...deps,
                react: { singleton: true, eager: true, requiredVersion: deps.react },
                "react-dom": {
                    singleton: true,
                    eager: true,
                    requiredVersion: deps["react-dom"],
                },
            },
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
};