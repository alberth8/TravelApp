var webpack = require('webpack');
var path = require('path');
module.exports = {
 // entry: {
 //   javascript: "./app/js/app.js",
 //   html: "./app/index.html"
 // }
  entry: [
  //path.resolve("../app/index.html"),
   'webpack-dev-server/client?http://0.0.0.0:3001',
   'webpack/hot/only-dev-server',
   path.resolve("../app/js/app.js")
  ],
  output: {
    path: __dirname + "/dist",
    filename: "./js/app.js"
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["react-hot", 'babel?'+JSON.stringify(
          {
            presets: ['react', 'es2015'],
            "plugins": [
              "syntax-class-properties",
              "syntax-decorators",
              "syntax-object-rest-spread",

              "transform-class-properties",
              "transform-object-rest-spread"
            ]
          }
        )]
      }
    ],
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ]
  }
};