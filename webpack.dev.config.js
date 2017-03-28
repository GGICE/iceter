var baseConfig = require('./webpack.config')

var devConfig  = Object.assign(baseConfig, {
  entry: {
    debug: './debug/debug'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: "./",
    host: '0.0.0.0',
    hot: true,
    inline: true,
    port: 9213
  }  
})

module.exports = devConfig