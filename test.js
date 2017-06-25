import test from 'ava';
import execa from 'execa';
import m from '.';

test('npm', async t => {
	t.throws(() => {
		m('.');
	});

	t.throws(() => {
		m('cat-names');
	});

	t.truthy(m('npm').version);

	await execa('npm', ['install', '--global', 'cat-names']);
	t.true(m('cat-names').all.indexOf('Snuggles') !== -1);
	await execa('npm', ['uninstall', '--global', 'cat-names']);
});

const testFailingCi = process.env.CI ? test.failing : test;
testFailingCi('yarn', async t => {
	await execa('npm', ['install', '--global', 'yarn']);

	await execa('yarn', ['global', 'add', 'dog-names']);
	t.true(m('dog-names').all.indexOf('Katie') !== -1);
	await execa('yarn', ['global', 'remove', 'dog-names']);
});

test('.silent()', t => {
	t.is(m.silent('.'), null);
});
