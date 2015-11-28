var webpack = require('webpack')
var path = require('path')

var TARGET = process.env.npm_lifecycle_event
process.env.BABEL_ENV = TARGET

var APP_PATH = path.resolve(__dirname, 'src/index.ts')
var BUILD_PATH = path.resolve(__dirname, 'lib')

module.exports = {
  entry: APP_PATH,
  output: {
    library: 'MyTsLibrary',
    path: BUILD_PATH,
    filename: 'index.js'
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },

  module: {
    preLoaders: [ { test: /\.tsx?$/, loader: "tslint" } ],
    loaders: [ { test: /\.tsx?$/, loader: 'babel!ts-loader' } ]
  },

  tslint: {
    emitErrors: true,
    failOnHint: true
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ]
}