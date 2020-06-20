const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

let config = {
  mode: 'none',
  devtool: 'inline-source-map',
  entry: {
    main: path.join(__dirname, '../src/index.ts')
  },
  output: {
    filename: 'draw.js',
    path: path.join(__dirname, '../dist')
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  devServer: {
    port: 8080,
    host: '0.0.0.0',
    overlay: {
      errors: true
    },
    hot: true
  },
  plugins: [
    // hot reload
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),

    // clean /dist
    new CleanWebpackPlugin()
  ],
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  }
}

module.exports = config