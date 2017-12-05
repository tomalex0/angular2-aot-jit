

//var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['*', '.js', '.ts']
  },
  entry: './js/ng2/app/main.jit.ts',
  output: {
    path: path.resolve(__dirname, '.build'),
    filename: 'app.main.js'
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
        /angular(\\|\/)core(\\|\/)@angular/,
        path.resolve(__dirname, 'doesnotexist/')
    ),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      },
      sourceMap: true
    }),
    new ExtractTextPlugin( "bundle.css" ),
    new CopyWebpackPlugin([
        {
            from: './index.html', to: 'index.html'
        },
        {
            from: './node_modules/zone.js/**'
        }
    ])
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.ts$/,
        use: ['awesome-typescript-loader', 'angular2-template-loader','angular-router-loader']
      }
    ]
  }
};

