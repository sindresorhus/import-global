import {resolveGlobal} from 'resolve-global';

export async function importGlobal(moduleName) {
	return import(resolveGlobal(moduleName));
}

export async function importGlobalSilent(moduleName) {
	try {
		return await importGlobal(moduleName);
	} catch {}
}
