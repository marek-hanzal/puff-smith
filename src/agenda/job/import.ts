import {Agenda, Job, Processor} from "agenda";
import xlsx from 'xlsx';
import {fileService} from "@/puff-smith/service/file";
import {toImport} from "@/puff-smith/import";
import {TranslationImport} from "@/puff-smith/service/translation";
import {measureTime} from "measure-time";
import {toHumanTimeMs} from "@leight-core/client";
import {IJob, IQueryParams} from "@leight-core/api";
import {jobUpdateStatus} from "@/puff-smith/service/job";
import {TagImport} from "@/puff-smith/service/tag";
import {VendorImport} from "@/puff-smith/service/vendor";
import {AtomizerService} from "@/puff-smith/service/atomizer/service";

export const ImportJobName = 'import';

const importHandlers = {
	...TranslationImport,
	...TagImport,
	...AtomizerService().importers(),
	...VendorImport,
};

export interface IImportParams extends IQueryParams {
	fileId: string;
}

export default function ImportJob(agenda: Agenda) {
	agenda.define(ImportJobName, (async (job: Job<IJob<IImportParams>>) => {
		console.log(`Preparing import`);
		const theJob = job.attrs.data;
		if (!theJob) {
			console.log(` - Missing data (job) for ImportJob`);
			return;
		}
		const fileId = theJob.params?.fileId;
		if (!fileId) {
			await jobUpdateStatus(theJob.id, "REVIEW");
			console.log(` - Missing fileId for ImportJob`, job.attrs.data);
			return;
		}
		await jobUpdateStatus(theJob.id, "RUNNING");
		try {
			const workbook = xlsx.readFile(fileService.toLocation(fileId));
			console.log(` - Available sheets [${workbook.SheetNames.join(', ')}]`);
			const getElapsed = measureTime();
			const result = await toImport(theJob, workbook, importHandlers);
			console.log(` - Import of [${fileId}] done in [${toHumanTimeMs(getElapsed().millisecondsTotal)}s]`);
			await ((result.failure || 0 > 0) || (result.skip || 0 > 0) ? jobUpdateStatus(theJob.id, "REVIEW") : jobUpdateStatus(theJob.id, "SUCCESS"));
		} catch (e) {
			console.error(` - Import of [${fileId}] failed.`, e);
			await jobUpdateStatus(theJob.id, "FAILURE");
		}
	}) as Processor)
};
