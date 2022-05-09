import {AromaService} from "@/puff-smith/service/aroma/AromaService";
import {AtomizerService} from "@/puff-smith/service/atomizer/AtomizerService";
import {BaseService} from "@/puff-smith/service/base/BaseService";
import {BoosterService} from "@/puff-smith/service/booster/BoosterService";
import {CellService} from "@/puff-smith/service/cell/CellService";
import {CoilService} from "@/puff-smith/service/coil/CoilService";
import {CottonService} from "@/puff-smith/service/cotton/CottonService";
import {FiberService} from "@/puff-smith/service/fiber/FiberService";
import {JobService} from "@/puff-smith/service/job/JobService";
import {ModService} from "@/puff-smith/service/mod/ModService";
import {PriceService} from "@/puff-smith/service/price/PriceService";
import fileService from "@/puff-smith/service/side-effect/fileService";
import {TagService} from "@/puff-smith/service/tag/TagService";
import {TariffService} from "@/puff-smith/service/tariff/TariffService";
import {TranslationService} from "@/puff-smith/service/translation/TranslationService";
import {VendorService} from "@/puff-smith/service/vendor/VendorService";
import {VoucherService} from "@/puff-smith/service/voucher/VoucherService";
import {WireService} from "@/puff-smith/service/wire/WireService";
import {IJob, IJobProcessor, IQueryParams} from "@leight-core/api";
import {toImport} from "@leight-core/server";
import xlsx from "xlsx";

const importHandlers = {
	...AromaService().importers(),
	...AtomizerService().importers(),
	...BaseService().importers(),
	...BoosterService().importers(),
	...CellService().importers(),
	...CoilService().importers(),
	...CottonService().importers(),
	...FiberService().importers(),
	...ModService().importers(),
	...PriceService().importers(),
	...TagService().importers(),
	...TariffService().importers(),
	...TranslationService().importers(),
	...VendorService().importers(),
	...VoucherService().importers(),
	...WireService().importers(),
};

interface IImportParams extends IQueryParams {
	fileId: string;
}

export interface IImportJob extends IJob<IImportParams> {
}

const JOB_NAME = "import";

export const ImportJob: IJobProcessor<IImportParams> = {
	name: () => JOB_NAME,
	schedule: async (params, userId) => JobService().schedule<IImportParams>(JOB_NAME, params, userId),
	register: agenda => agenda.define(JOB_NAME, {
		concurrency: 1,
		priority: 50,
	}, JobService().handle<IImportParams>(JOB_NAME, async ({logger, job, jobProgress}) => {
		const labels = {jobId: job.id};
		logger = logger.child({labels, jobId: labels.jobId});
		logger.info("Checking fileId");
		const fileId = job.params?.fileId;
		if (!fileId) {
			await jobProgress.setResult("REVIEW");
			logger.error(`Missing fileId for [${JOB_NAME}].`, {labels});
			return;
		}
		logger = logger.child({labels: {...labels, fileId}, fileId});
		const workbook = xlsx.readFile(fileService.toLocation(fileId));
		logger.debug(` - Available sheets [${workbook.SheetNames.join(", ")}]`);
		await toImport({job, jobProgress, workbook, handlers: importHandlers});
	})),
};
