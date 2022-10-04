import {BACKUP_JOB} from "@/puff-smith/jobs/backup/interface";
import {IBackupJobParams} from "@/puff-smith/service/backup/interface";
import {JobSource} from "@/puff-smith/service/job/JobSource";
import {IJobProcessor} from "@leight-core/api";
import delay from "delay";
import PQueue from "p-queue";

export const BackupJob: IJobProcessor<IBackupJobParams> = JobSource().processor(BACKUP_JOB, async ({logger, job, jobProgress}) => {
	const labels = {jobId: job.id};
	logger = logger.child({labels, jobId: labels.jobId});
	await delay(5000);
}, options => new PQueue({
	...options,
	concurrency: 1,
	interval: 1,
}));
