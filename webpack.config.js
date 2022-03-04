const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv");

const envVars = dotenv.config({ path: __dirname + "/src/config/.env" }).parsed;

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js",
  },
  devServer: {
    port: 8000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        exclude: /node_modules/,
        enforce: "pre",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx", ".json"],
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "@components": path.resolve(__dirname, "src/components/"),
      public: path.resolve(__dirname, "public/"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public/index.html"),
    }),
    new webpack.DefinePlugin({
      "process.env": {
        REACT_APP_API_URL: JSON.stringify(envVars.REACT_APP_API_URL),
        REACT_APP_DEFINITION_URL: JSON.stringify(
          envVars.REACT_APP_DEFINITION_URL
        ),
        REACT_APP_TRANSLATION_URL: JSON.stringify(
          envVars.REACT_APP_TRANSLATION_URL
        ),
        REACT_APP_SOCKET_CONNECTION_URL: JSON.stringify(
          envVars.REACT_APP_SOCKET_CONNECTION_URL
        ),
      },
    }),
  ],
};
