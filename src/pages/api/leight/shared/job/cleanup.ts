import {MutationEndpoint} from "@leight-core/server";
import {jobCleanup} from "@/puff-smith/service/job";

export default MutationEndpoint<"Cleanup", void, void>(async ({res}) => {
	await jobCleanup();
	res.end();
});
