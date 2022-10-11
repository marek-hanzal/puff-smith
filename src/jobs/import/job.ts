import {
	IImportJobParams,
	IMPORT_JOB
}                          from "@/puff-smith/jobs/import/interface";
import {AromaSource}       from "@/puff-smith/service/aroma/AromaSource";
import {JobSource}         from "@/puff-smith/service/job/JobSource";
import fileService         from "@/puff-smith/service/side-effect/fileService";
import {TagSource}         from "@/puff-smith/service/tag/TagSource";
import {TokenSource}       from "@/puff-smith/service/token/TokenSource";
import {TranslationSource} from "@/puff-smith/service/translation/TranslationSource";
import {UserSource}        from "@/puff-smith/service/user/UserSource";
import {VendorSource}      from "@/puff-smith/service/vendor/VendorSource";
import {IJobProcessor}     from "@leight-core/api";
import {toImport}          from "@leight-core/server";
import PQueue              from "p-queue";
import xlsx                from "xlsx";

const importers = [
	AromaSource(),
	TagSource(),
	TokenSource(),
	TranslationSource(),
	VendorSource(),
];

export const ImportJob: IJobProcessor<IImportJobParams> = JobSource().processor(IMPORT_JOB, async ({logger, job, params: {fileId}, jobProgress}) => {
	const labels = {jobId: job.id};
	logger       = logger.child({labels, jobId: labels.jobId});
	logger.info("Checking fileId");
	if (!fileId) {
		await jobProgress.setResult("REVIEW");
		logger.error(`Missing fileId for [${IMPORT_JOB}].`, {labels});
		return;
	}
	logger         = logger.child({labels: {...labels, fileId}, fileId});
	const workbook = xlsx.readFile(fileService.toLocation(fileId));
	logger.debug(` - Available sheets [${workbook.SheetNames.join(", ")}]`);
	await toImport({
		user:      await UserSource().asUser(job.userId),
		job,
		jobProgress,
		workbook,
		importers: {},
	});
}, options => new PQueue({
	...options,
	concurrency: 1,
	interval:    1,
}));
