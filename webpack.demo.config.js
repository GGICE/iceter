var baseConfig = require('./webpack.config')

var config  = Object.assign(baseConfig, {
  entry: {
    debug: './debug/debug'
  },
  output: {
      path: __dirname,
      filename: "./dist/[name].js",
      libraryTarget: "window"
  }
})

module.exports = config