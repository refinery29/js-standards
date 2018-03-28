'use strict';

module.exports = function (context, opts = {}) {
  var env = ['env', {}];

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
    presets: [env, "react", "stage-3"],
    plugins: ["transform-class-properties"]
  };
};
