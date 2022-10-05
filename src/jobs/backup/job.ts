import {BACKUP_JOB} from "@/puff-smith/jobs/backup/interface";
import {BackupService} from "@/puff-smith/service/backup/BackupService";
import {IBackupRequest} from "@/puff-smith/service/backup/interface";
import {FileSource} from "@/puff-smith/service/file/FileSource";
import {JobSource} from "@/puff-smith/service/job/JobSource";
import {UserSource} from "@/puff-smith/service/user/UserSource";
import {IJobProcessor} from "@leight-core/api";
import PQueue from "p-queue";

export const BackupJob: IJobProcessor<IBackupRequest> = JobSource().processor(BACKUP_JOB, async ({logger, params, job, userId, jobProgress}) => {
	const fileSource = FileSource().withUser(await UserSource().asUser(userId));
	const backupService = BackupService();
	await backupService.backup(params);
	const labels = {jobId: job.id};
	logger = logger.child({labels, jobId: labels.jobId});
}, options => new PQueue({
	...options,
	concurrency: 1,
	interval: 1,
}));
