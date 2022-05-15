import {IImportJobParams, IMPORT_JOB} from "@/puff-smith/cli/jobs/import/interface";
import {ServiceCreate} from "@/puff-smith/service";
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
import {IJobProcessor} from "@leight-core/api";
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


export const ImportJob: IJobProcessor<IImportJobParams> = {
	schedule: async (params, userId) => JobService(ServiceCreate(userId)).schedule<IImportJobParams>({
		name: IMPORT_JOB,
		params,
	}),
	scheduleAt: async (schedule, params, userId) => JobService(ServiceCreate(userId)).scheduleAt<IImportJobParams>({
		name: IMPORT_JOB,
		params,
		at: schedule,
	}),
	handle: () => JobService().handle<IImportJobParams>(async ({logger, job, jobProgress}) => {
		const labels = {jobId: job.id};
		logger = logger.child({labels, jobId: labels.jobId});
		logger.info("Checking fileId");
		const fileId = job.params?.fileId;
		if (!fileId) {
			await jobProgress.setResult("REVIEW");
			logger.error(`Missing fileId for [${IMPORT_JOB}].`, {labels});
			return;
		}
		logger = logger.child({labels: {...labels, fileId}, fileId});
		const workbook = xlsx.readFile(fileService.toLocation(fileId));
		logger.debug(` - Available sheets [${workbook.SheetNames.join(", ")}]`);
		await toImport({job, jobProgress, workbook, handlers: importHandlers});
	}),
};
