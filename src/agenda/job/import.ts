import {Agenda, Job, Processor} from "agenda";
import xlsx from 'xlsx';
import {fileService} from "@/puff-smith/service/file";
import {TranslationService} from "@/puff-smith/service/translation";
import {measureTime} from "measure-time";
import {toHumanTimeMs} from "@leight-core/client";
import {IJob, IQueryParams} from "@leight-core/api";
import {jobUpdateFailure, jobUpdateSkip, jobUpdateStatus, jobUpdateSuccess, jobUpdateTotal} from "@/puff-smith/service/job";
import {TagService} from "@/puff-smith/service/tag";
import {VendorService} from "@/puff-smith/service/vendor";
import {AtomizerService} from "@/puff-smith/service/atomizer";
import {toImport} from "@leight-core/server";
import {ModService} from "@/puff-smith/service/mod";
import {CellService} from "@/puff-smith/service/cell";
import {CottonService} from "@/puff-smith/service/cotton";
import {VoucherService} from "@/puff-smith/service/voucher";

export const ImportJobName = 'import';

const importHandlers = {
	...AtomizerService().importers(),
	...CellService().importers(),
	...CottonService().importers(),
	...ModService().importers(),
	...TagService().importers(),
	...TranslationService().importers(),
	...VendorService().importers(),
	...VoucherService().importers(),
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
			const result = await toImport(theJob, workbook, importHandlers, {
				async onTotal(total: number): Promise<void> {
					await jobUpdateTotal(theJob.id, total);
				},
				async onSuccess(success: number, total: number, processed: number): Promise<void> {
					await jobUpdateSuccess(theJob.id, success, total, processed);
				},
				async onSkip(skip: number, total: number, processed: number): Promise<void> {
					await jobUpdateSkip(theJob.id, skip, total, processed);
				},
				async onFailure(error: Error, failure: number, total: number, processed: number): Promise<void> {
					await jobUpdateFailure(theJob.id, failure, total, processed);
				}
			});
			console.log(` - Import of [${fileId}] done in [${toHumanTimeMs(getElapsed().millisecondsTotal)}s]`);
			await ((result.failure || 0 > 0) || (result.skip || 0 > 0) ? jobUpdateStatus(theJob.id, "REVIEW") : jobUpdateStatus(theJob.id, "SUCCESS"));
		} catch (e) {
			console.error(` - Import of [${fileId}] failed.`, e);
			await jobUpdateStatus(theJob.id, "FAILURE");
		}
	}) as Processor)
};
