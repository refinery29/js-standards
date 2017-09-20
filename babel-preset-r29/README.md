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
