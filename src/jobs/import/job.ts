import {IImportJobParams, IMPORT_JOB} from "@/puff-smith/jobs/import/interface";
import {JobRepository} from "@/puff-smith/service/job/JobRepository";
import fileService from "@/puff-smith/service/side-effect/fileService";
import {IJobProcessor} from "@leight-core/api";
import {toImport} from "@leight-core/server";
import xlsx from "xlsx";

const importers = {
	// ...AromaRepository().importers(),
	// ...AtomizerRepository().importers(),
	// ...BaseRepository().importers(),
	// ...BoosterRepository().importers(),
	// ...CellRepository().importers(),
	// ...CoilRepository().importers(),
	// ...CottonRepository().importers(),
	// ...FiberRepository().importers(),
	// ...ModRepository().importers(),
	// ...PriceRepository().importers(),
	// ...TagRepository().importers(),
	// ...TariffRepository().importers(),
	// ...TranslationRepository().importers(),
	// ...VendorRepository().importers(),
	// ...VoucherRepository().importers(),
	// ...WireRepository().importers(),
};

export const ImportJob: IJobProcessor<IImportJobParams> = JobRepository().processor(IMPORT_JOB, async ({logger, job, params: {fileId}, jobProgress}) => {
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
	await toImport({job, jobProgress, workbook, importers});
});
