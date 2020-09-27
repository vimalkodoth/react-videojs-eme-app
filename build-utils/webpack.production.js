const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
module.exports = () => ({
  output: {
    filename: "[chunkhash].js",
  },
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCSSExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [new MiniCSSExtractPlugin()],
});
