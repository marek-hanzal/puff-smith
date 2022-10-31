import {
    IRestoreJobParams,
    RESTORE_JOB
}                      from "@/puff-smith/jobs/restore/interface";
import {Container}     from "@/puff-smith/service/Container";
import {JobSource}     from "@/puff-smith/service/job/JobSource";
import fileService     from "@/puff-smith/service/side-effect/fileService";
import prisma          from "@/puff-smith/service/side-effect/prisma";
import {UserSource}    from "@/puff-smith/service/user/UserSource";
import {IJobProcessor} from "@leight-core/viv";
import PQueue          from "p-queue";

export const RestoreJob: IJobProcessor<IRestoreJobParams> = JobSource().processor(RESTORE_JOB, async ({logger, job, params: {fileId}, jobProgress, userId}) => {
	const container = Container({
		user: await UserSource().asUser(userId),
	});
	const labels    = {jobId: job.id};
	logger          = logger.child({labels, jobId: labels.jobId});
	logger.info("Checking fileId");
	if (!fileId) {
		await jobProgress.setResult("REVIEW");
		logger.error(`Missing fileId for [${RESTORE_JOB}].`, {labels});
		return;
	}
	await container.useRestoreService(async restoreService => {
		await restoreService.restore({
			prisma,
			archive: fileService.toLocation(fileId),
			sources: [
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
	});
}, options => new PQueue({
	...options,
	concurrency: 1,
	interval:    1,
}));
