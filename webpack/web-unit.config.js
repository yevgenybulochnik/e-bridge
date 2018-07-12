const webpack = require('webpack')
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webDev = require('./web-dev.config.js')

var adjustedFields = {
  entry: {
    unit: './src/frontend/unit.tsx'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/frontend/unit-index.html',
      inject: 'body'
    })
  ]
}

module.exports = merge.strategy({entry: 'replace', plugins: 'replace'})(webDev, adjustedFields)
