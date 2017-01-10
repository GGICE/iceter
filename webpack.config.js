var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
    entry: {
      Iceter: './src/Iceter'
    },
    devtool: 'source-map',
    module: {
      loaders: [
        { 
          test: /\.js$/, 
          exclude: /node_modules/, 
          loader: "babel-loader" 
        },
        {
          test: /\.sass$/,
          loader: ExtractTextPlugin.extract('style', 'css!sass')
        },
      ]
    },
    output: {
      path: __dirname,
      filename: "./dist/[name].js"
    },
    plugins: [
      new ExtractTextPlugin("dist/styles.css")
    ],
    devServer: {
		  contentBase: "./",
			hot: true,
			inline: true,
			port: 9213
		}
};