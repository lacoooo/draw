var path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

var BUILD_PATH = path.resolve(__dirname, '../dist')

module.exports = {

  mode: 'production',
  devtool: 'source-map',
  
  entry: {
    draw: path.resolve( BUILD_PATH, "draw.js" )
  },

  output: {
    library: 'draw',
    libraryTarget: 'umd',    
    path: BUILD_PATH,
    filename: 'draw.min.js'
  },

  resolve: {
    extensions: ['.js']
  },

  optimization: {
    minimizer: [new TerserPlugin()],
  },

  plugins: []

};