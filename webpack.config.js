const path = require("path");
const WebpackStylish = require("webpack-stylish");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  entry: {
    app: "./src/index.ts",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "..", "dist"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },
  mode: isProd ? "production" : "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
    ],
  },
  plugins: [new WebpackStylish()],
  stats: "none",
};
