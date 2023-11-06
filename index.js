import {createRequire} from 'node:module';
import globalDirectory from 'global-directory';

const {resolve} = createRequire(import.meta.url);

export async function importGlobal(moduleName) {
	const modulePath = resolve(moduleName, {
		paths: [
			globalDirectory.yarn.packages,
			globalDirectory.npm.packages,
		],
	});

	return import(modulePath);
}

export async function importGlobalSilent(moduleName) {
	try {
		return await importGlobal(moduleName);
	} catch {}
}
