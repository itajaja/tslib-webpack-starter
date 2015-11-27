var path = require('path')

module.exports = function (config) {

  config.set({

    browsers: [ 'Chrome' ],
    frameworks: [ 'mocha' ],
    reporters: [ 'mocha' ],

    files: [
      'tests.webpack.js'
    ],

    preprocessors: {
      'tests.webpack.js': [ 'webpack', 'sourcemap' ]
    },

    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          { test: /\.tsx?$/, loader: 'babel!ts-loader' }
        ]
      }
    }
  })

}
