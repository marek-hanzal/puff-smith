import {BACKUP_JOB}    from "@/puff-smith/jobs/backup/interface";
import {Container}     from "@/puff-smith/service/Container";
import {JobSource}     from "@/puff-smith/service/job/JobSource";
import {UserSource}    from "@/puff-smith/service/user/UserSource";
import {IJobProcessor} from "@leight-core/api";
import {BackupService} from "@leight-core/server";
import PQueue          from "p-queue";

export const BackupJob: IJobProcessor<void> = JobSource().processor(BACKUP_JOB, async ({logger, job, userId, jobProgress}) => {
	const container = Container();
	await BackupService({
		version: process.env.NEXT_PUBLIC_BUILD || "-snapshot-",
		user:    await UserSource().asUser(userId),
		container,
		jobProgress,
		logger:  logger.child({labels: {jobId: job.id}, jobId: job.id}),
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
	}).backup();
}, options => new PQueue({
	...options,
	concurrency: 1,
	interval:    1,
}));
