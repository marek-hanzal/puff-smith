import {MixturesJob} from "@/puff-smith/cli/jobs/mixture";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"MixturesUpdate", void, any>(async ({toUserId}) => MixturesJob.schedule({}, toUserId()));
