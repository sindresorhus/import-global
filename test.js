import process from 'node:process';
import test from 'ava';
import {execa} from 'execa';
import {importGlobal, importGlobalSilent} from './index.js';

test('importGlobal - npm', async t => {
	await execa('npm', ['uninstall', '--global', 'cat-names']);

	await t.throwsAsync(importGlobal('./index.js'));
	await t.throwsAsync(importGlobal('cat-names'));
	await t.throwsAsync(importGlobal('npm'), {message: /programmatic API was removed/});

	await execa('npm', ['install', '--global', 'cat-names']);

	const {default: catNames} = await importGlobal('cat-names');
	t.true(catNames.all.includes('Snuggles'));

	await execa('npm', ['uninstall', '--global', 'cat-names']);
});

const testFailingCi = process.env.CI ? test.failing : test;
testFailingCi('importGlobal - yarn', async t => {
	await execa('npm', ['install', '--global', 'yarn']);
	await execa('yarn', ['global', 'add', 'dog-names']);

	const {default: dogNames} = await importGlobal('dog-names');
	t.true(dogNames.all.includes('Katie'));

	await execa('yarn', ['global', 'remove', 'dog-names']);
});

test('importGlobalSilent', async t => {
	t.is(await importGlobalSilent('./index.js'), undefined);
});
