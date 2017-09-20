'use strict';

module.exports = function (context, opts = {}) {
  var es2015 = ['es2015', {}];
  if (opts.modules !== undefined) {
    es2015[1].modules = opts.modules;
  }

  return {
    presets: [es2015, "react", "stage-3"],
    plugins: ["transform-class-properties"]
  };
};
