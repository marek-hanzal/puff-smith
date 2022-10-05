import {BackupJob}        from "@/puff-smith/jobs/backup/job";
import {IJob}             from "@leight-core/api";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Backup", void, IJob<void>>({
	handler: BackupJob.request,
});
