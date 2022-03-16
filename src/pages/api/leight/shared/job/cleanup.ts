import {MutationEndpoint} from "@leight-core/server";
import {IJobFilter, jobCleanup} from "@/puff-smith/service/job";

export default MutationEndpoint<"Cleanup", IJobFilter, boolean>(({req: {body}}) => jobCleanup(body || {
	status: 'DONE',
}));
