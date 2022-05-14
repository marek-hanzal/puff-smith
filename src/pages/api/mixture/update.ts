import {MixturesJob} from "@/puff-smith/cli/jobs/mixture/job";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"MixtureUpdate", void, any>(async ({toUserId}) => MixturesJob.schedule({}, toUserId()));
