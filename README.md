# bows-loader

[![npm version](https://badge.fury.io/js/bows-loader.svg)](http://badge.fury.io/js/bows-loader)

A webpack loader that injects [bows](https://www.npmjs.com/package/bows) (a console.log replacement) into source files.

## Install

```
npm install bows-loader --save
```

## Usage

Add `bows-loader` to your source loader chain.

```
...
module: {
  loaders: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loaders: ["bows-loader", "babel"],
    },
  ],
},
...
```

Then, you can use the global `log` in place of console.log.

Bows is safe to use in production, see their [documentation](https://www.npmjs.com/package/bows) for more details.

## .eslintrc changes

Since you'll be using a new global in your source, eslint should complain about this. Either add `log` as a global, or use [eslint-config-bows-loader](https://www.npmjs.com/package/eslint-config-bows-loader).

## LICENSE

MIT
