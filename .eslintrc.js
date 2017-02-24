module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      modules: true,
      jsx: true
    },
    sourceType: "module"
  },
  plugins: [
    "react"
  ],
  rules: {
    "array-bracket-spacing": [2, "never"],
    "block-spacing": [2, "always"],
    "brace-style": [2, "1tbs", { "allowSingleLine": true }],
    "camelcase": [2, { "properties": "never" }],
    "comma-dangle": [2, "never"],
    "comma-spacing": [2, { "before": false, "after": true }],
    "comma-style": [2, "last"],
    "computed-property-spacing": [2, "never"],
    "consistent-this": [2, "_this"],
    "curly": 2,
    "dot-location": [2, "property"],
    "dot-notation": 2,
    "eqeqeq": 2,
    "eol-last": 2,
    "guard-for-in": 2,
    "indent": [2, 2, { "VariableDeclarator": { "var": 2 }, "SwitchCase": 1 }],
    "jsx-quotes": 2,
    "key-spacing": [2, { "beforeColon": false, "afterColon": true }],
    "keyword-spacing": 2,
    "linebreak-style": [2, "unix"],
    "new-cap": 2,
    "no-bitwise": 2,
    "no-caller": 2,
    "no-cond-assign": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-else-return" : 2,
    "no-empty": 2,
    "no-extra-semi": 2,
    "no-mixed-spaces-and-tabs": 2,
    "no-multi-spaces": 2,
    "no-multi-str": 2,
    "no-multiple-empty-lines": 2,
    "no-spaced-func": 2,
    "no-trailing-spaces": 2,
    "no-undefined": 2,
    "no-unreachable": 2,
    "no-use-before-define": [2, "nofunc"],
    "no-with": 2,
    "no-var": 2,
    "object-curly-spacing": [2, "always"],
    "one-var": [2, { "var": "always", "let": "never", "const": "never" }],
    "prefer-const": 2,
    "quotes": [2, "single", "avoid-escape"],
    "react/jsx-boolean-value": 2,
    "react/jsx-closing-bracket-location": 2,
    "react/jsx-curly-spacing": 2,
    "react/jsx-handler-names": 2,
    "react/jsx-indent-props": [2, 2],
    "react/jsx-key": 2,
    "react/jsx-max-props-per-line": 0,
    "react/jsx-no-bind": [2, { ignoreRefs: true, allowArrowFunctions: true }],
    "react/jsx-no-duplicate-props": 2,
    "react/jsx-no-literals": 0,
    "react/jsx-no-undef": 2,
    "react/jsx-pascal-case": 2,
    "react/jsx-sort-prop-types": 0,
    "react/jsx-sort-props": 0,
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/jsx-wrap-multilines": 2,
    "react/no-did-update-set-state": 2,
    "react/no-direct-mutation-state": 2,
    "react/no-multi-comp": [2, { "ignoreStateless": true }],
    "react/no-set-state": 0,
    "react/no-unknown-property": 2,
    "react/prefer-es6-class": 2,
    "react/prop-types": 2,
    "react/react-in-jsx-scope": 2,
    "react/self-closing-comp": 2,
    "react/sort-comp": 2,
    "semi": 2,
    "semi-spacing": [2, { "before": false, "after": true }],
    "space-before-blocks": [2, "always"],
    "space-before-function-paren": [2, "never"],
    "space-in-parens": [2, "never"],
    "space-infix-ops": 2,
    "space-unary-ops": 2,
    "wrap-iife": 2,
    "yoda": [2, "never"]
  }
};
