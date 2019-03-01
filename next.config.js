const withTypescript = require("@zeit/next-typescript");

const CompressionPlugin = require("compression-webpack-plugin");
const zopfli = require("@gfx/zopfli");
const brotli = require("iltorb");

const production = process.env.NODE_ENV === "production";

module.exports = withTypescript({
  webpack(config) {
    production &&
      config.plugins.push(
        new CompressionPlugin({
          test: /\.(js|css)$/,
          // eslint-disable-line no-unused-vars
          algorithm: (input, options, callback) => {
            zopfli.gzip(input, {}, callback);
          }
        }),
        new CompressionPlugin({
          test: /\.(js|css)$/,
          filename: "[path].br[query]",
          // eslint-disable-line no-unused-vars
          algorithm: (input, options, callback) => {
            brotli.compress(input, {}, callback);
          }
        })
      );
    return config;
  },
  cssModules: true
});
