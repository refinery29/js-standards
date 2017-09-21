'use strict';

module.exports = function (context, opts = {}) {
  var es2015 = ['es2015', {}];
  if (opts.modules !== undefined) {
    es2015[1].modules = opts.modules;
  }
  if (opts.loose !== undefined) {
    es2015[1].loose = opts.loose;
  }

  return {
    presets: [es2015, "react", "stage-3"],
    plugins: ["transform-class-properties"]
  };
};
