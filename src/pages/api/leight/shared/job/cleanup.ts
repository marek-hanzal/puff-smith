import {MutationEndpoint} from "@leight-core/server";
import {IJobFilter, jobCleanup} from "@/puff-smith/service/job";

export default MutationEndpoint<"Cleanup", IJobFilter | undefined, boolean>(({req: {body}}) => jobCleanup(body));
