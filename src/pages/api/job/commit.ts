import {jobCommit} from "@/puff-smith/service/job";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Commit", void, boolean>(jobCommit);
