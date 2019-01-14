'use strict';

module.exports = function (context, opts = {}) {
  var env = ['@babel/env', {}];

  if (opts.node === true) {
    env[1].targets = { node: '6.13' };
  }
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
