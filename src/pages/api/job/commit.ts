import {ServerBootstrap} from "@/puff-smith/service/bootstrap";
import {jobCommit} from "@/puff-smith/service/job";
import {MutationEndpoint} from "@leight-core/server";

ServerBootstrap();

export default MutationEndpoint<"Commit", void, boolean>(jobCommit);
