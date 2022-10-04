import {BACKUP_JOB} from "@/puff-smith/jobs/backup/interface";
import {IBackupJobParams} from "@/puff-smith/service/backup/interface";
import {FileSource} from "@/puff-smith/service/file/FileSource";
import {JobSource} from "@/puff-smith/service/job/JobSource";
import {UserSource} from "@/puff-smith/service/user/UserSource";
import {IJobProcessor} from "@leight-core/api";
import dayjs from "dayjs";
import PQueue from "p-queue";

export const BackupJob: IJobProcessor<IBackupJobParams> = JobSource().processor(BACKUP_JOB, async ({logger, job, userId, jobProgress}) => {
	const fileSource = FileSource().withUser(await UserSource().asUser(userId));
	const labels = {jobId: job.id};
	logger = logger.child({labels, jobId: labels.jobId});
	const file = fileSource.store({
		path: "/backup",
		name: `Backup-${dayjs().format("YYYY-MM-DD")}.zip`,
		replace: true,
	});
}, options => new PQueue({
	...options,
	concurrency: 1,
	interval: 1,
}));
