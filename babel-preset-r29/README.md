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
