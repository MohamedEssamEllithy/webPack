const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    bundle :path.resolve(__dirname, "src/index.js"),

  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean :true,
    assetModuleFilename:"[name][ext]"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // Match image files
        type:"asset/resource"
      },
    ],
  },
  devServer: {
    static: {
      directory:path.resolve(__dirname, 'dist'), 
    },
    compress: true, 
    port: 3000, 
    hot: true, 
    open: true, 
    historyApiFallback: true, 
    
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      title: "hello webpack",
      filename: "index.html",
    }),
  ],
};
