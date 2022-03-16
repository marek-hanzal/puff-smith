import {MutationEndpoint} from "@leight-core/server";
import {jobCleanup} from "@/puff-smith/service/job";

export default MutationEndpoint<"Cleanup", void, boolean>(jobCleanup);
