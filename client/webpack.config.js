const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  return {
    entry: path.join(__dirname, "./Index.tsx"),
    output: {
      path: path.join(__dirname, "./public/build"),
      filename: "[name].bundle.js",
    },
    resolve: { extensions: [".js", ".jsx", ".json", ".ts", ".tsx"] },
    module: {
      rules: [
        { test: /\.(ts|tsx)$/, exclude: /node_modules/, loader: "ts-loader" },
        { test: /\.(png|jpe?g|gif)$/i, use: ["file-loader"] },
        {
          test: /\.s[ac]ss$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
    devServer: {
      contentBase: path.join(__dirname, "/public/build"),
      compress: true,
      port: 3000,
      historyApiFallback: true,
      proxy: {
        "/api": {
          target: "http://localhost:3001",
          secure: false,
          changeOrigin: true,
        },
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "SwoleMater",
        template: "./public/Index.html",
      }),
    ],
  };
};
