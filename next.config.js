const withTypescript = require('@zeit/next-typescript')
const path = require('path')

module.exports = withTypescript({
  webpack(config, options) {
    return config
  }
})