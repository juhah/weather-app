var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  env : process.env.NODE_ENV || 'development',
}

config.globals = {
  'process.env'  : {
    'NODE_ENV' : JSON.stringify(config.env)
  },
  'NODE_ENV'     : config.env,
  '__DEV__'      : config.env === 'development',
  '__PROD__'     : config.env === 'production',
  '__TEST__'     : config.env === 'test'
}

const __DEV__ = config.globals.__DEV__
const __PROD__ = config.globals.__PROD__
const __TEST__ = config.globals.__TEST__

const webpackConfig = {
  entry: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './src/client'
  ],
  output: {
      filename: 'bundle.js',
      publicPath: '/'
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  },
  devServer: {
    contentBase : './',
    historyApiFallback: true,
    hot: true
  },
  plugins : [
    new webpack.DefinePlugin(config.globals),
    new HtmlWebpackPlugin({
      template : 'src/client/index.html',
      hash     : false,
      filename : 'index.html',
      inject   : 'body',
      minify   : {
        collapseWhitespace : true
      }
    })
  ]
};

if (__DEV__) {
  webpackConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  )
} else if (__PROD__) {
  webpackConfig.plugins.push(
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress : {
        unused    : true,
        dead_code : true,
        warnings  : false
      }
    })
  )
}

module.exports = webpackConfig;
