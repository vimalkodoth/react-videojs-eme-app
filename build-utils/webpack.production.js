const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");
const CSSModuleLoader = {
    loader: "css-loader",
    options: {
        modules: true,
        localIdentName: "[name]_[local]_[hash:base64:5]",
        importLoaders: 2,
        sourceMap: false // turned off as causes delay
    }
};
// For our normal CSS files we would like them globally scoped
const CSSLoader = {
    loader: "css-loader",
    options: {
        modules: "global",
        importLoaders: 2,
        sourceMap: false // turned off as causes delay
    }
};

const PostCSSLoader = {
    loader: "postcss-loader",
    options: {
        sourceMap: false, // turned off as causes delay
        postcssOptions: {
            plugins: () => [
                autoprefixer({
                    browsers: [
                        "last 2 chrome versions",
                        "last 2 chromeAndroid versions",
                        "last 2 firefox versions",
                        "last 2 firefoxAndroid versions",
                        "last 2 Safari versions",
                        "last 2 iOS versions",
                        "last 2 Edge versions",
                        "last 2 Opera versions",
                        "last 2 OperaMobile versions",
                        "ie >= 11"
                    ]
                })
            ]
        }
    }
};
module.exports = () => ({
    output: {
        filename: "[chunkhash].js"
    },
    devtool: "cheap-module-source-map",
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                exclude: /\.module\.(sa|sc|c)ss$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    CSSLoader,
                    PostCSSLoader,
                    "sass-loader"
                ]
            },
            {
                test: /\.module\.(sa|sc|c)ss$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    CSSModuleLoader,
                    PostCSSLoader,
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [new MiniCSSExtractPlugin()]
});
