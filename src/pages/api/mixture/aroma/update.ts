import {IMixtureJobParams, MixtureJob} from "@/puff-smith/cli/jobs/mixture/job";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"MixtureUpdate", IMixtureJobParams, any>(async ({request, toUserId}) => MixtureJob.schedule(request, toUserId()));
