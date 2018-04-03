const path = require("path");
const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  watch: false,
  watchOptions: {},
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, '../dist/assets'),
    publicPath: '/assets/'
  },
  resolve: {
    extensions: ['.js', '.jcx', '.css', '.json'],
    alias: {
      root: path.join(__dirname, 'src'),
      components: path.join(__dirname, 'src/components')
    }
  },
  plugins: [],
  module: {
      loaders: [
          {
              test: /\.scss$/,
              loaders: ['style-loader', 'css-loader', 'sass-loader']
          },
          {
              test: /\.css$/,
              loader: ['style-loader', 'css-loader']
          },
          {
              test: /.jsx?$/,
              loader: 'babel-loader',
              exclude: ['/node_modules/'],
              query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-class-properties', 'transform-node-env-inline', 'transform-regenerator']
              }
          },
          {
            test: /\.csv$/,
            loader: 'csv-loader',
            options: {
              dynamicTyping: true,
              header: true,
              skipEmptyLines: true
            }
          }
      ]
  }
};
