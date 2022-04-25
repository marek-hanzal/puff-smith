import {AromaService} from "@/puff-smith/service/aroma";
import {AtomizerService} from "@/puff-smith/service/atomizer";
import {BaseService} from "@/puff-smith/service/base";
import {BoosterService} from "@/puff-smith/service/booster";
import {CellService} from "@/puff-smith/service/cell";
import {CottonService} from "@/puff-smith/service/cotton";
import {fileService} from "@/puff-smith/service/file";
import {JobService} from "@/puff-smith/service/job";
import {ModService} from "@/puff-smith/service/mod";
import {PriceService} from "@/puff-smith/service/price";
import {TagService} from "@/puff-smith/service/tag";
import {TariffService} from "@/puff-smith/service/tariff";
import {TranslationService} from "@/puff-smith/service/translation";
import {VendorService} from "@/puff-smith/service/vendor";
import {VoucherService} from "@/puff-smith/service/voucher";
import {IJob, IQueryParams} from "@leight-core/api";
import {toImport} from "@leight-core/server";
import {Agenda, Job, Processor} from "agenda";
import xlsx from "xlsx";

export const ImportJobName = "import";

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
	agenda.define(ImportJobName, {
		concurrency: 1,
		priority: 50,
	}, JobService().handle<IImportParams>(ImportJobName, async ({logger, job, jobProgress}) => {
		const labels = {jobId: job.id};
		logger = logger.child({labels, jobId: labels.jobId});
		logger.info("Checking fileId");
		const fileId = job.params?.fileId;
		if (!fileId) {
			await jobProgress.status("REVIEW");
			logger.error(`Missing fileId for [${ImportJobName}].`, {labels});
			return;
		}
		logger = logger.child({labels: {...labels, fileId}, fileId});
	}));


	(async (job: Job<IJob<IImportParams>>) => {


		await jobProgress.status("RUNNING");
		try {
			const workbook = xlsx.readFile(fileService.toLocation(fileId));
			logger.debug(` - Available sheets [${workbook.SheetNames.join(", ")}]`);
			const result = await toImport(theJob, workbook, importHandlers, {
				onTotal: jobProgress.total,
				onSuccess: jobProgress.onSuccess,
				onFailure: jobProgress.onFailure,
				onSkip: jobProgress.onSkip,
			});
			logger.info("Import done");
			await jobProgress.status(((result.failure || 0 > 0) || (result.skip || 0 > 0) ? "REVIEW" : "SUCCESS"));
		} catch (e) {
			logger.error(`Import failed.`, {error: e});
			await jobProgress.status("FAILURE");
		}
		await jobService.schedule(ImportJobName, undefined, theJob.userId);
	}) as Processor;
};
