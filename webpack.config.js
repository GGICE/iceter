module.exports = {
    entry: {
      Iceter: './src/Iceter'
    },
    module: {
      loaders: [
        { 
          test: /\.js$/, 
          exclude: /node_modules/, 
          loader: 'babel-loader'
        },
        {
          test: /\.sass$/,
          loaders: ['style', 'css', 'sass']
        },
      ]
    },
    output: {
      path: __dirname,
      filename: "./dist/[name].js",
      libraryTarget: "umd"
    }
};