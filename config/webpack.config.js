const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  devtool: "source-map",
  resolve: {
    alias:{
      react: path.resolve('../node_modules/react'),
    },
    extensions: [".js", ".ts", ".tsx"]
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "../dist"),
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  }
};