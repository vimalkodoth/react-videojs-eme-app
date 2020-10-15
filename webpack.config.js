const webpack = require("webpack");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const modeConfig = (env) => require(`./build-utils/webpack.${env}`)(env);
const presetConfig = require("./build-utils/loadPresets");

module.exports = (
    { mode, presets, API_BASE_URL } = { mode: "producton", presets: [] }
) => {
    return merge(
        {
            mode,
            module: {
                rules: [
                    {
                        test: /\.(js|jsx)$/,
                        exclude: /node_modules/,
                        use: {
                            loader: "babel-loader"
                        }
                    },
                    {
                        test: /\.(jpe?g|png|gif|svg)$/,
                        use: [
                            {
                                loader: "url-loader",
                                options: {
                                    limit: 5000
                                }
                            }
                        ]
                    },
                    {
                        test: /\.html$/,
                        use: [
                            {
                                loader: "html-loader"
                            }
                        ]
                    }
                ]
            },
            output: {
                filename: "bundle.js",
                publicPath: "/"
            },
            plugins: [
                new HtmlWebpackPlugin({
                    template: "./src/index.html",
                    filename: "./index.html"
                }),
                new webpack.ProgressPlugin(),
                new webpack.DefinePlugin({
                    "process.env.API_BASE_URL": JSON.stringify(API_BASE_URL)
                })
            ]
        },
        modeConfig(mode),
        presetConfig({ mode, presets })
    );
};
