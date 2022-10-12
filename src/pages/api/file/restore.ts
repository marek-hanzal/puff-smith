import {
	IRestoreJob,
	IRestoreJobParams
}                         from "@/puff-smith/jobs/restore/interface";
import {RestoreJob}       from "@/puff-smith/jobs/restore/job";
import {
	ContainerClass,
	ContainerPromise
}                         from "@/puff-smith/service/Container";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<ContainerClass, IRestoreJobParams, IRestoreJob>({
	name:      "Restore",
	container: ContainerPromise,
	handler:   RestoreJob.request,
});
