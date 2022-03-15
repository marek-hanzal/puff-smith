import xlsx from "xlsx";
import {IImportHandlers, IImportMeta, IImportTabs, IImportTranslations} from "@/puff-smith/import";
import {Readable} from "node:stream";
import {measureTime} from "measure-time";
import {toHumanNumber, toHumanTimeMs, toPercent} from "@leight-core/client";
import {IJob} from "@leight-core/api";
import {IImportParams} from "@/puff-smith/agenda/job/import";
import {jobUpdateFailure, jobUpdateSkip, jobUpdateSuccess, jobUpdateTotal} from "@/puff-smith/service/job";

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

export const toImport = async (job: IJob<IImportParams>, workbook: xlsx.WorkBook, handlers: IImportHandlers): Promise<Omit<IJob, "params" | "skipRatio" | "successRatio" | "failureRatio" | "id" | "userId" | "status" | "progress" | "created">> => {
	console.log('Generating import');
	const meta = toMeta(workbook);
	console.log('- Meta\n', meta);

	let total = 0;
	let processed = 0;
	let success = 0;
	let failure = 0;
	let skip = 0;
	await Promise.all(meta.tabs.map(async tab => {
		const workSheet = workbook.Sheets[tab.tab];
		if (!workSheet) {
			return;
		}
		await Promise.all(tab.services.map(async () => {
			for await (const item of xlsx.stream.to_json(workSheet)) {
				total++;
			}
		}))
	}));

	console.log('Total', total);
	await jobUpdateTotal(job.id, total);

	await Promise.all(meta.tabs.map(async tab => {
		const workSheet = workbook.Sheets[tab.tab];
		if (!workSheet) {
			return;
		}
		return await Promise.all(tab.services.map(async service => {
			console.log(`- Executing service [${service}]`);
			const stream: Readable = xlsx.stream.to_json(workSheet);
			const handler = handlers[service]?.();
			if (!handler) {
				console.log(`- Service [${service}] not found.`);
				for await (const item of stream) {
					skip++;
					processed++;
					await jobUpdateSkip(job.id, skip, total, processed);
				}
				return;
			}
			await handler.begin?.({});
			const getElapsed = measureTime();
			for await (const item of stream) {
				processed++;
				try {
					await handler.handler(Object.keys(item).reduce<any>((obj, key) => {
						obj[meta.translations[key] || key] = item[key];
						return obj;
					}, {}));
					success++;
					await jobUpdateSuccess(job.id, success, total, processed);
				} catch (e) {
					failure++;
					await jobUpdateFailure(job.id, failure, total, processed);
					console.error('Error on item', item, e);
				}
			}
			console.log(`Import [${service}] results:
	imported [${success}]
	success [${success}/${total} (${toHumanNumber(toPercent(success, total), 2)}%)]
	failure [${failure}/${total} (${toHumanNumber(toPercent(failure, total), 2)}%)] 				
	skip [${skip}/${total} (${toHumanNumber(toPercent(skip, total), 2)}%)] 				
	runtime [${toHumanTimeMs(getElapsed().millisecondsTotal)}].
`)
			await handler.end?.({});
			console.log(`- Service [${service}] done.`);
		}));
	}));
	console.log('- Done');

	return {
		failure,
		success,
		skip,
		total,
	}
}
