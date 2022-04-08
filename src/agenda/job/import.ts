import {AromaService} from "@/puff-smith/service/aroma";
import {AtomizerService} from "@/puff-smith/service/atomizer";
import {BaseService} from "@/puff-smith/service/base";
import {BoosterService} from "@/puff-smith/service/booster";
import {ServerBootstrap} from "@/puff-smith/service/bootstrap";
import {CellService} from "@/puff-smith/service/cell";
import {CottonService} from "@/puff-smith/service/cotton";
import {fileService} from "@/puff-smith/service/file";
import {jobUpdateFailure, jobUpdateSkip, jobUpdateStatus, jobUpdateSuccess, jobUpdateTotal} from "@/puff-smith/service/job";
import {ModService} from "@/puff-smith/service/mod";
import {PriceService} from "@/puff-smith/service/price";
import {TagService} from "@/puff-smith/service/tag";
import {TariffService} from "@/puff-smith/service/tariff";
import {TranslationService} from "@/puff-smith/service/translation";
import {VendorService} from "@/puff-smith/service/vendor";
import {VoucherService} from "@/puff-smith/service/voucher";
import {IJob, IQueryParams} from "@leight-core/api";
import {Logger, toImport} from "@leight-core/server";
import {Agenda, Job, Processor} from "agenda";
import xlsx from "xlsx";

export const ImportJobName = "import";

ServerBootstrap();

const importHandlers = {
	...AromaService().importers(),
	...AtomizerService().importers(),
	...BaseService().importers(),
	...BoosterService().importers(),
	...CellService().importers(),
	...CottonService().importers(),
	...ModService().importers(),
	...PriceService().importers(),
	...TagService().importers(),
	...TariffService().importers(),
	...TranslationService().importers(),
	...VendorService().importers(),
	...VoucherService().importers(),
};

export interface IImportParams extends IQueryParams {
	fileId: string;
}

export default function ImportJob(agenda: Agenda) {
	let logger = Logger("import");
	agenda.define(ImportJobName, (async (job: Job<IJob<IImportParams>>) => {
		const labels = {jobId: job.attrs.data?.id};
		logger = logger.child({labels, jobId: labels.jobId});
		logger.info("Preparing import");
		const theJob = job.attrs.data;
		if (!theJob) {
			logger.error(`Missing data (job) for ImportJob`);
			return;
		}
		logger.info("Checking fileId");
		const fileId = theJob.params?.fileId;
		if (!fileId) {
			await jobUpdateStatus(theJob.id, "REVIEW");
			logger.error(`Missing fileId for ImportJob`, {labels});
			return;
		}
		logger = logger.child({labels: {...labels, fileId}, fileId});
		logger.info(`Marking job as running`);
		await jobUpdateStatus(theJob.id, "RUNNING");
		try {
			const workbook = xlsx.readFile(fileService.toLocation(fileId));
			logger.debug(` - Available sheets [${workbook.SheetNames.join(", ")}]`);
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
			logger.info("Import done");
			await ((result.failure || 0 > 0) || (result.skip || 0 > 0) ? jobUpdateStatus(theJob.id, "REVIEW") : jobUpdateStatus(theJob.id, "SUCCESS"));
		} catch (e) {
			logger.error(`Import failed.`, {error: e});
			await jobUpdateStatus(theJob.id, "FAILURE");
		}
	}) as Processor);
};
