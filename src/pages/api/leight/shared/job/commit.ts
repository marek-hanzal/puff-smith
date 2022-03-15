import {MutationEndpoint} from "@leight-core/server";
import {jobCommit} from "@/puff-smith/service/job";

export default MutationEndpoint<"Commit", void, void>(async ({res}) => {
	await jobCommit();
	res.end();
});
