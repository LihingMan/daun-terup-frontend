const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "main.js",
    publicPath: "/",
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src"),
      styles: path.resolve(__dirname, "styles"),
      assets: path.resolve(__dirname, "assets"),
    },
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
  devServer: {
    // static: {
    //   directory: path.join(__dirname, 'assets'),
    // },
    static: "./",
    historyApiFallback: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader"],
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
      {
        test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
        // use: 'url-loader?limit=100000',
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
    }),
  ],
};
