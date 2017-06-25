# import-global [![Build Status](https://travis-ci.org/sindresorhus/import-global.svg?branch=master)](https://travis-ci.org/sindresorhus/import-global)

> Import a globally installed module

**Please don't use this unless absolutely necessary. Local dependencies should be preferred.**


## Install

```
$ npm install import-global
```


## Usage

```
$ npm install --global cat-names
```

```js
const importGlobal = require('import-global');
const catNames = importGlobal('cat-names');

catNames.random();
//=> 'Snuggles'
```


## API

### importGlobal(moduleId)

Throws if the module can't be found.

### importGlobal.silent(moduleId)

Returns `null` instead of throwing if the module can't be found.

#### moduleId

Type: `string`

What you would use in `require()`.


## Related

- [resolve-global](https://github.com/sindresorhus/resolve-global) - Resolve the path of a globally installed module
- [import-from](https://github.com/sindresorhus/import-from) - Import a module from a given path
- [resolve-from](https://github.com/sindresorhus/resolve-from) - Resolve the path of a module from a given path
- [is-installed-globally](https://github.com/sindresorhus/is-installed-globally) - Check if your package was installed globally
- [global-dirs](https://github.com/sindresorhus/global-dirs) - Get the directory of globally installed packages and binaries


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
