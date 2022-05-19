import {IImportJobParams, IMPORT_JOB} from "@/puff-smith/jobs/import/interface";
import {defaults} from "@/puff-smith/service";
import {AromaRepository} from "@/puff-smith/service/aroma/AromaRepository";
import {AtomizerRepository} from "@/puff-smith/service/atomizer/AtomizerRepository";
import {BaseRepository} from "@/puff-smith/service/base/BaseRepository";
import {BoosterRepository} from "@/puff-smith/service/booster/BoosterRepository";
import {CellRepository} from "@/puff-smith/service/cell/CellRepository";
import {CoilRepository} from "@/puff-smith/service/coil/CoilRepository";
import {CottonRepository} from "@/puff-smith/service/cotton/CottonRepository";
import {FiberRepository} from "@/puff-smith/service/fiber/FiberRepository";
import {JobRepository} from "@/puff-smith/service/job/JobRepository";
import {ModRepository} from "@/puff-smith/service/mod/ModRepository";
import {PriceRepository} from "@/puff-smith/service/price/PriceRepository";
import fileService from "@/puff-smith/service/side-effect/fileService";
import {TagRepository} from "@/puff-smith/service/tag/TagRepository";
import {TariffRepository} from "@/puff-smith/service/tariff/TariffRepository";
import {TranslationRepository} from "@/puff-smith/service/translation/TranslationRepository";
import {VendorRepository} from "@/puff-smith/service/vendor/VendorRepository";
import {VoucherRepository} from "@/puff-smith/service/voucher/VoucherRepository";
import {WireRepository} from "@/puff-smith/service/wire/WireRepository";
import {IJobProcessor} from "@leight-core/api";
import {toImport} from "@leight-core/server";
import xlsx from "xlsx";

const $defaults = defaults();
const importHandlers = {
	...AromaRepository($defaults).importers(),
	...AtomizerRepository($defaults).importers(),
	...BaseRepository($defaults).importers(),
	...BoosterRepository($defaults).importers(),
	...CellRepository($defaults).importers(),
	...CoilRepository($defaults).importers(),
	...CottonRepository($defaults).importers(),
	...FiberRepository($defaults).importers(),
	...ModRepository($defaults).importers(),
	...PriceRepository($defaults).importers(),
	...TagRepository($defaults).importers(),
	...TariffRepository($defaults).importers(),
	...TranslationRepository($defaults).importers(),
	...VendorRepository($defaults).importers(),
	...VoucherRepository($defaults).importers(),
	...WireRepository($defaults).importers(),
};

export const ImportJob: IJobProcessor<IImportJobParams> = JobRepository($defaults).processor(IMPORT_JOB, async ({logger, job, params: {fileId}, jobProgress}) => {
	const labels = {jobId: job.id};
	logger = logger.child({labels, jobId: labels.jobId});
	logger.info("Checking fileId");
	if (!fileId) {
		await jobProgress.setResult("REVIEW");
		logger.error(`Missing fileId for [${IMPORT_JOB}].`, {labels});
		return;
	}
	logger = logger.child({labels: {...labels, fileId}, fileId});
	const workbook = xlsx.readFile(fileService.toLocation(fileId));
	logger.debug(` - Available sheets [${workbook.SheetNames.join(", ")}]`);
	await toImport({job, jobProgress, workbook, handlers: importHandlers});
});
