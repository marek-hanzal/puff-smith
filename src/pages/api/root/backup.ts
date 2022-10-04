import {BackupJob} from "@/puff-smith/jobs/backup/job";
import {IBackupJobParams, IBackupRequest} from "@/puff-smith/service/backup/interface";
import {IJob} from "@leight-core/api";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Backup", IBackupRequest, IJob<IBackupJobParams>>({
	handler: BackupJob.request,
});
