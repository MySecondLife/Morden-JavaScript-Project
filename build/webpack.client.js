require("dotenv").config();
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const env = process.env;
const isProductionEnv = env.NODE_ENV === "production";
// require("@babel/polyfill"); // 三种方法设置polyfill 1在.babelrc中进行设置 2webpack入口设置 entry 3直接引入文件至网页文件中
const HappyPack = require("happypack"); // 打开多进程进行打包构建，提高构建速度；结合js jsx module和插件

const StyleLintPlugin = require("stylelint-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

console.log(env.client_host_url);
console.log(env.version);
console.log(env.NODE_ENV);

module.exports = {
  mode: env.NODE_ENV === "production" ? "production" : "development",
  entry: {
    main1: "./src/index.jsx",
    test: "./src/big.js",
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].[contentHash:8].js",
  },
  resolve: {
    extensions: [".jsx", ".js"],
  },
  module: {
    rules: [
      //     {
      //     test: /(\.jsx?)$/,
      //     exclude: '/node_modules/',
      //     loader: 'babel-loader?cacheDirectory' // 设置cacheDirectory后，webpack只会重新打包修改的文件
      // },
      {
        test: /(\.jsx?)$/,
        exclude: "/node_modules/",
        use: ["happypack/loader?id=babel"], // 把js，jsx的打包权限转给id=babel的happypack实例
      },
      {
        test: /\.scss$/,
        use: [
          isProductionEnv ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 5000,
              name: `images/[name].[hash:7].[ext]`,
            },
          },
        ],
      },
    ],
  },
  // sideEffects: [
  //     '*.scss'
  // ],
  devtool: env.NODE_ENV === "production" ? "" : "source-map",
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendor: {
          name: "vendor",
          priority: 1,
          test: /node_modules/,
          minSize: 1000,
          minChunks: 1,
        },
        common: {
          name: "common",
          priority: 0,
          minSize: 0,
          minChunks: 2,
        },
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "tiger wood",
      template: "./src/index.html",
    }),
    new StyleLintPlugin({
      configFile: ".stylelintrc.json",
      syntax: "scss",
      files: "**/*.(s(c|a)ss)",
    }),
    new ESLintPlugin({
      extensions: ["js", "jsx"],
    }),
    new MiniCssExtractPlugin(),
    new HappyPack({
      id: "babel", // HappyPack实例的ID
      loaders: ["babel-loader?cacheDirectory"], // HappyPack实例使用的loader
    }),
    // new webpack.optimize.ModuleConcatenationPlugin()  set mode:production情况下，自动执行，合并模块！
  ],
  devServer: {
    port: 8089,
    host: "localhost",
    open: true,
  },
};
