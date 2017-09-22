# babel-preset-r29

> A Babel preset for Refinery29

## Install

```sh
npm install --save-dev babel-preset-r29
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["r29"]
}
```

### Via CLI

```sh
$ babel script.js --presets r29
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  presets: ["r29"]
});
```

### Supported options
#### loose
`boolean`, defaults to `false`.

Turns on the ES2015 plugin's loose mode.
http://2ality.com/2015/12/babel6-loose-mode.html

In practice we have found that this can reduce bundle size by ~5%.

#### modules
`"amd" | "umd" | "systemjs" | "commonjs" | false`, defaults to "commonjs".

Enable transformation of ES6 module syntax to another module type.

Setting this to false will not transform modules. Use this for Webpack 2,
since Webpack 2's tree-shaking works best if you don't transform `import`/`export`
statements.

Example of a Webpack config where this is the case:
```js
{
  test: /\.js$/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: [
        ['r29', { modules: false }],
      ],
      plugins: []
    }
  },
  exclude: /node_modules/
}
```
