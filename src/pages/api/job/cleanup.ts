import {ServerBootstrap} from "@/puff-smith/service/bootstrap";
import {IJobFilter, jobCleanup} from "@/puff-smith/service/job";
import {MutationEndpoint} from "@leight-core/server";

ServerBootstrap();

export default MutationEndpoint<"Cleanup", IJobFilter | undefined, boolean>(({req: {body}}) => jobCleanup(body));
