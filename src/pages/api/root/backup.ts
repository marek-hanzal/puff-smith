import {BackupJob} from "@/puff-smith/jobs/backup/job";
import {
	asyncContainer,
	ContainerClass
}                  from "@/puff-smith/service/Container";
import {
	IJob,
	MutationEndpoint
}                  from "@leight-core/viv";

export default MutationEndpoint<ContainerClass, void, IJob<void>>({
	name:      "Backup",
	container: asyncContainer,
	handler:   BackupJob.request,
});
