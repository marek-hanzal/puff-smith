import xlsx from "xlsx";
import {IImportBeginEvent, IImportEndEvent, IImportHandlers, IImportMeta, IImportTabs, IImportTranslations} from "@/puff-smith/import";
import {Readable} from "node:stream";
import {measureTime} from "measure-time";
import {miliDuration, toHumanNumber} from "@leight-core/client";

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
		return Promise.all(tab.services.map(async service => {
			console.log(`- Executing service [${service}]`);
			const handler = handlers[service]?.();
			if (!handler) {
				console.log(`- Service [${service}] not found.`);
				return;
			}
			let count = 0;
			for await (const item of xlsx.stream.to_json(workSheet)) {
				count++;
			}
			const beginEvent: IImportBeginEvent = {count};
			console.log(`Total [${service}] [${beginEvent.count}].`)
			await handler.begin?.(beginEvent);
			const stream: Readable = xlsx.stream.to_json(workSheet);
			let success = 0;
			let failure = 0;
			const getElapsed = measureTime();
			for await (const item of stream) {
				try {
					await handler.handler(Object.keys(item).reduce<any>((obj, key) => {
						obj[meta.translations[key] || key] = item[key];
						return obj;
					}, {}));
					success++;
				} catch (e) {
					failure++;
					console.error('Error on item', item, e);
				}
			}
			const endEvent: IImportEndEvent = count > 0 ? {
				count,
				success,
				failure,
				successRatio: 100 * success / count,
				failureRatio: 100 * failure / count,
				runtime: getElapsed().millisecondsTotal,
			} : {
				count,
				runtime: getElapsed().millisecondsTotal,
			};
			console.log(`Import [${service}] results:
	success [${endEvent.success}/${endEvent.count} (${toHumanNumber(endEvent.successRatio, 2)}%)]
	failure [${endEvent.failure}/${endEvent.count} (${toHumanNumber(endEvent.failureRatio, 2)}%)] 				
	runtime [${miliDuration(endEvent.runtime)}].
`)
			await handler.end?.(endEvent);
			console.log(`- Service [${service}] done.`);
		}));
	});
	console.log('- Done');
	return Promise.all(promise);
}
