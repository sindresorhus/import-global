# import-global

> Import a globally installed module

**Please don't use this unless absolutely necessary. Local dependencies should be preferred.**

## Install

```sh
npm install import-global
```

## Usage

```sh
npm install --global cat-names
```

```js
import {importGlobal} from 'import-global';

const {default: catNames} = await importGlobal('cat-names');

catNames.random();
//=> 'Snuggles'
```

## API

### importGlobal(moduleName)

Throws if the module cannot be found.

### importGlobalSilent(moduleName)

Returns `undefined` instead of throwing if the module cannot be found.

#### moduleName

Type: `string`

What you would use in [`import()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import).

## Related

- [resolve-global](https://github.com/sindresorhus/resolve-global) - Resolve the path of a globally installed module
- [import-from](https://github.com/sindresorhus/import-from) - Import a module from a given path
- [resolve-from](https://github.com/sindresorhus/resolve-from) - Resolve the path of a module from a given path
- [is-installed-globally](https://github.com/sindresorhus/is-installed-globally) - Check if your package was installed globally
- [global-directory](https://github.com/sindresorhus/global-directory) - Get the directory of globally installed packages and binaries
