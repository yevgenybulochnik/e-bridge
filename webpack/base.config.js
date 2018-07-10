const webpack = require('webpack');
const DotEnv = require('dotenv-webpack')
const { TsConfigPathsPlugin } = require('awesome-typescript-loader')
require('dotenv').config()

module.exports = {
  resolve: {
    plugins: [
      new TsConfigPathsPlugin()
    ],
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            }
          },
          {loader: 'sass-loader'}
        ]
      },
    ]
  },
  plugins: [
    new DotEnv(),
  ]
}

