const ngToolsWebpack = require('@ngtools/webpack');

//var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');

var appModule = __dirname + '/js/ng2/app/app.module#AppModule';


module.exports = {
  resolve: {
    extensions: ['.ts', '.js']
  },
  entry: './js/ng2/app/main.aot.ts',
  output: {
    path: './dist-aot',
    publicPath: 'dist-aot/',
    filename: 'app.main.js'
  },
  plugins: [
    new ngToolsWebpack.AotPlugin({
      tsConfigPath: './tsconfig-aot.json',
      entryModule: appModule
    }),
    //new CopyWebpackPlugin([
    //	{from: './index.html'}
    //]),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      },
      sourceMap: true
    })
  ],
  module: {
    rules: [
      {test: /\.scss$/, use: ['raw-loader', 'sass-loader']},
      {test: /\.css$/, use: 'raw-loader'},
      {test: /\.html$/, use: 'raw-loader'},
      {test: /\.ts$/, use: '@ngtools/webpack'}
    ]
  },
  devServer: {
    historyApiFallback: true
  }
};

