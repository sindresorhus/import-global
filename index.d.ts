/**
Import a globally installed module.

@param moduleName - What you would use in [`import()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import).
@returns The module, or throws if the module cannot be found.

@example
```
// $ npm install --global cat-names

import {importGlobal} from 'import-global';

const {default: catNames} = await importGlobal('cat-names');

catNames.random();
//=> 'Snuggles'
```
*/
export function importGlobal(moduleName: string): string;

/**
Import a globally installed module.

@param moduleName - What you would use in [`import()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import).
@returns The module, or `undefined` cannot be found.

@example
```
// $ npm install --global cat-names

import {importGlobal} from 'import-global';

const {default: catNames} = await importGlobal('cat-names');

catNames.random();
//=> 'Snuggles'
```
*/
export function importGlobalSilent(moduleName: string): string | undefined;
