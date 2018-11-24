const withTypescript = require('@zeit/next-typescript')
const withSass = require('@zeit/next-sass')
const path = require('path')

module.exports = withTypescript(
  withSass({
    webpack(config, options) {
      return config;
    },
    cssModules: true,
    sassLoaderOptions: {},
  })
);