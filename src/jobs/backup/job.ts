import {BACKUP_JOB} from "@/puff-smith/jobs/backup/interface";
import {BackupService} from "@/puff-smith/service/backup/BackupService";
import {IBackupRequest} from "@/puff-smith/service/backup/interface";
import {Container} from "@/puff-smith/service/Container";
import {JobSource} from "@/puff-smith/service/job/JobSource";
import {UserSource} from "@/puff-smith/service/user/UserSource";
import {IJobProcessor} from "@leight-core/api";
import PQueue from "p-queue";

export const BackupJob: IJobProcessor<IBackupRequest> = JobSource().processor(BACKUP_JOB, async ({logger, params, job, userId, jobProgress}) => {
	await BackupService({
		user: await UserSource().asUser(userId),
		container: Container(),
		jobProgress,
		logger: logger.child({labels: {jobId: job.id}, jobId: job.id}),
	}).backup(params);
}, options => new PQueue({
	...options,
	concurrency: 1,
	interval: 1,
}));
