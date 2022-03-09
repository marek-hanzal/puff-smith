import xlsx from "xlsx";
import {IImportHandlers, IImportMeta, IImportTabs, IImportTranslations} from "@/puff-smith/import";
import {Readable} from "node:stream";

export const toTabs = (workbook: xlsx.WorkBook): IImportTabs[] => {
	const tabs = workbook.Sheets['tabs'];
	if (!tabs) {
		return [];
	}
	return xlsx.utils.sheet_to_json<{ tab: string, services: string }>(tabs).map<IImportTabs>(({tab, services}) => ({tab, services: services.split(/,\s+/g)}));
}

export const toTranslations = (workbook: xlsx.WorkBook): IImportTranslations => {
	const translations = workbook.Sheets['translations'];
	if (!translations) {
		return {};
	}
	return xlsx.utils.sheet_to_json<{ from: string, to: string }>(translations).reduce<IImportTranslations>((obj, current) => {
		obj[current.from] = current.to;
		return obj;
	}, {});
}

export const toMeta = (workbook: xlsx.WorkBook): IImportMeta => {
	return {
		tabs: toTabs(workbook),
		translations: toTranslations(workbook),
	};
}

export const toImport = async (workbook: xlsx.WorkBook, handlers: IImportHandlers) => {
	console.log('Generating import');
	const meta = toMeta(workbook);
	console.log('- Meta\n', meta);
	const promise = meta.tabs.map(tab => {
		const workSheet = workbook.Sheets[tab.tab];
		if (!workSheet) {
			return;
		}
		return tab.services.map(async service => {
			console.log(`- Executing service [${service}]`);
			const handler = handlers[service];
			if (!handler) {
				console.log(`- Service [${service}] not found.`);
				return;
			}
			const stream: Readable = xlsx.stream.to_json(workSheet);
			for await (const item of stream) {
				handler(item);
			}
			console.log(`- Service [${service}] done.`);
		});
	});
	console.log('- Done');
	return Promise.all(promise);
}
