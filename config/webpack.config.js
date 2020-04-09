const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  resolve: {
    alias:{
      react: path.resolve('../node_modules/react'),
    },
  },
  externals: {
    react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
    },
    'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
    }
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
      }
    ]
  }
};