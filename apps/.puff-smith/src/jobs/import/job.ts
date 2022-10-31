import {
    IImportJobParams,
    IMPORT_JOB
}                   from "@/puff-smith/jobs/import/interface";
import {Container}  from "@/puff-smith/service/Container";
import {JobSource}  from "@/puff-smith/service/job/JobSource";
import fileService  from "@/puff-smith/service/side-effect/fileService";
import {UserSource} from "@/puff-smith/service/user/UserSource";
import {
    IJobProcessor,
    toImport
}                   from "@leight-core/viv";
import PQueue       from "p-queue";
import xlsx         from "xlsx";

export const ImportJob: IJobProcessor<IImportJobParams> = JobSource().processor(IMPORT_JOB, async ({logger, job, params: {fileId}, jobProgress, userId}) => {
	const container = Container({
		user: await UserSource().asUser(userId),
	});
	const labels    = {jobId: job.id};
	logger          = logger.child({labels, jobId: labels.jobId});
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
		container: Container({user: await UserSource().asUser(job.userId)}),
		job,
		jobProgress,
		workbook,
		sources:   [
			await container.useAromaSource(async source => source),
			await container.useBaseSource(async source => source),
			await container.useBoosterSource(async source => source),
			await container.useLiquidSource(async source => source),
			await container.useRecipeSource(async source => source),
			await container.useTagSource(async source => source),
			await container.useTokenSource(async source => source),
			await container.useTranslationSource(async source => source),
			await container.useUserSource(async source => source),
			await container.useVendorSource(async source => source),
		],
	});
}, options => new PQueue({
	...options,
	concurrency: 1,
	interval:    1,
}));
