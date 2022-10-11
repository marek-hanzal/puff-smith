import {
	IRestoreJobParams,
	RESTORE_JOB
}                  from "@/puff-smith/jobs/restore/interface";
import {Container} from "@/puff-smith/service/Container";
import {JobSource} from "@/puff-smith/service/job/JobSource";
import {
	IJobProcessor,
	ISource
}                  from "@leight-core/api";
import PQueue      from "p-queue";

export const RestoreJob: IJobProcessor<IRestoreJobParams> = JobSource().processor(RESTORE_JOB, async ({logger, job, params: {fileId}, jobProgress}) => {
	const container = Container();
	const labels    = {jobId: job.id};
	logger          = logger.child({labels, jobId: labels.jobId});
	logger.info("Checking fileId");

	const sources: Record<string, ISource<any, any, any>> = [
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
	].reduce((prev, current) => {
		return {...prev, [current.name]: current};
	}, {});

	if (!fileId) {
		await jobProgress.setResult("REVIEW");
		logger.error(`Missing fileId for [${RESTORE_JOB}].`, {labels});
		return;
	}
	logger = logger.child({labels: {...labels, fileId}, fileId});
	// unpack(fileService.toLocation(fileId), "...");
	//
	// await unzipFs(, async fs => {
	// 	const meta = fs.json<IBackupMeta>("meta.json");
	// 	for (const name of meta.sources) {
	// 		const source = sources[name] || undefined;
	// 		if (!source) {
	// 			continue;
	// 		}
	// 		// noinspection ES6MissingAwait
	// 		fs.forEach(async path => {
	// 			console.log(`Processing ${path}`);
	// 			await delay(500);
	// 		}, "source");
	// 	}
	// });
}, options => new PQueue({
	...options,
	concurrency: 1,
	interval:    1,
}));
