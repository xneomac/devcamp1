const webpack = require('webpack')
const config = require('./webpack.base')

config.watch = true
config.watchOptions = {
  aggregateTimeout: 300,
  poll: 1000
},

module.exports = config
