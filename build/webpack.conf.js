const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.conf')
const devConfig = require('./webpack.dev.conf')
const proConfig = require('./webpack.pro.conf')

module.exports = (env, argv) => {
  let config = argv.mode === 'development' ? devConfig : proConfig;
  return merge(baseConfig, config);
};