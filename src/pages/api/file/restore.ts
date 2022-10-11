import {
	IRestoreJob,
	IRestoreJobParams
}                         from "@/puff-smith/jobs/restore/interface";
import {RestoreJob}       from "@/puff-smith/jobs/restore/job";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Restore", IRestoreJobParams, IRestoreJob>({
	handler: RestoreJob.request,
});
