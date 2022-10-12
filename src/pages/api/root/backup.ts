import {BackupJob}        from "@/puff-smith/jobs/backup/job";
import {
	asyncContainer,
	ContainerClass
}                         from "@/puff-smith/service/Container";
import {IJob}             from "@leight-core/api";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<ContainerClass, void, IJob<void>>({
	name:      "Backup",
	container: asyncContainer,
	handler:   BackupJob.request,
});
