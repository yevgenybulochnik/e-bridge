const webpack = require('webpack')
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./base.config.js')

module.exports = merge(baseConfig, {
  entry: {
    app: './src/frontend/main.tsx',
  },
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
    port: process.env.FRONTEND_PORT || 8080,
    host: process.env.FRONTEND_HOST || '',
    public: process.env.FRONTEND_PUBLIC_DOMAIN|| '',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },
  optimization: {
    splitChunks:{
      chunks: 'all'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/frontend/index.html',
      inject: 'body'
    }),
  ]
})
