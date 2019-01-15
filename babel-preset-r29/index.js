'use strict';

module.exports = function (context, opts = {}) {
  var env = ['@babel/env', {}];
  var supportedBrowsers = [ ">0.25%", "not ie <= 8", "not op_mini all"];

  env[1].targets = (opts.node === true)
    ? { node: '6.13' }
    : { browsers: supportedBrowsers };

  if (opts.modules !== undefined) {
    env[1].modules = opts.modules;
  }
  if (opts.loose !== undefined) {
    env[1].loose = opts.loose;
  }

  return {
    presets: [env, "@babel/react"],
    plugins: [
      "@babel/syntax-dynamic-import",
      "@babel/syntax-import-meta",
      ["@babel/proposal-class-properties", { "loose": false }],
      "@babel/proposal-json-strings"
    ]
  };
};
