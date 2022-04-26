import {AromaService} from "@/puff-smith/service/aroma/AromaService";
import {AtomizerService} from "@/puff-smith/service/atomizer/AtomizerService";
import {BaseService} from "@/puff-smith/service/base/BaseService";
import {BoosterService} from "@/puff-smith/service/booster/BoosterService";
import {CellService} from "@/puff-smith/service/cell/CellService";
import {CottonService} from "@/puff-smith/service/cotton/CottonService";
import {JobService} from "@/puff-smith/service/job/JobService";
import {ModService} from "@/puff-smith/service/mod/ModService";
import {PriceService} from "@/puff-smith/service/price/PriceService";
import fileService from "@/puff-smith/service/side-effect/fileService";
import {TagService} from "@/puff-smith/service/tag/TagService";
import {TariffService} from "@/puff-smith/service/tariff/TariffService";
import {TranslationService} from "@/puff-smith/service/translation/TranslationService";
import {VendorService} from "@/puff-smith/service/vendor/VendorService";
import {VoucherService} from "@/puff-smith/service/voucher/VoucherService";
import {IQueryParams} from "@leight-core/api";
import {toImport} from "@leight-core/server";
import {Agenda} from "agenda";
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
	}, JobService().handle<IImportParams>(ImportJobName, async ({logger, job, jobProgress, jobService}) => {
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
		const workbook = xlsx.readFile(fileService.toLocation(fileId));
		logger.debug(` - Available sheets [${workbook.SheetNames.join(", ")}]`);
		await toImport(job, workbook, importHandlers, {
			onTotal: jobProgress.total,
			onSuccess: jobProgress.onSuccess,
			onFailure: jobProgress.onFailure,
			onSkip: jobProgress.onSkip,
		});
	}));
};
