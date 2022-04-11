import {IJobFilter, jobCleanup} from "@/puff-smith/service/job";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Cleanup", IJobFilter | undefined, boolean>(({req: {body}}) => jobCleanup(body));
