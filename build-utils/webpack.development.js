const autoprefixer = require("autoprefixer");
const CSSModuleLoader = {
  loader: "css-loader",
  options: {
    modules: {
      localIdentName: "[name]_[local]_[hash:base64:5]",
    },
    importLoaders: 2,
    sourceMap: false, // turned off as causes delay
  },
};
// For our normal CSS files we would like them globally scoped
const CSSLoader = {
  loader: "css-loader",
  options: {
    modules: "global",
    importLoaders: 2,
    sourceMap: true, // turned off as causes delay
  },
};
const PostCSSLoader = {
  loader: "postcss-loader",
  options: {
    sourceMap: false, // turned off as causes delay
    postcssOptions: {
      plugins: () => [
        autoprefixer({
          browsers: [">1%", "last 4 versions", "Firefox ESR", "not ie < 9"],
        }),
      ],
    },
  },
};
module.exports = () => ({
  devtool: "#eval-source-map",
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /\.module\.(sa|sc|c)ss$/,
        use: ["style-loader", CSSLoader, PostCSSLoader, "sass-loader"],
      },
      {
        test: /\.module\.(sa|sc|c)ss$/,
        use: ["style-loader", CSSModuleLoader, PostCSSLoader, "sass-loader"],
      },
    ],
  },
});
