import {Agenda, Job, Processor} from "agenda";
import xlsx from 'xlsx';
import fileService from "@/puff-smith/service/file";
import {toImport} from "@/puff-smith/import";
import {TranslationImport} from "@/puff-smith/service/translation";
import {measureTime} from "measure-time";
import {toHumanTimeMs} from "@leight-core/client";
import {IJob, IQueryParams} from "@leight-core/api";

export const ImportJobName = 'import';

export interface IImportParams extends IQueryParams {
	fileId: string;
}

export default function ImportJob(agenda: Agenda) {
	agenda.define(ImportJobName, (async (job: Job<IJob<IImportParams>>) => {
		console.log(`Preparing import`);
		const fileId = job.attrs.data?.params?.fileId;
		if (!fileId) {
			console.log(` - Missing fileId for ImportJob`, job.attrs.data);
			return;
		}
		const workbook = xlsx.readFile(fileService.toLocation(fileId));
		console.log(` - Available sheets [${workbook.SheetNames.join(', ')}]`);
		const getElapsed = measureTime();
		await toImport(workbook, {
			...TranslationImport,
		});
		console.log(` - Import of [${fileId}] done in [${toHumanTimeMs(getElapsed().millisecondsTotal)}s]`);
	}) as Processor)
};
