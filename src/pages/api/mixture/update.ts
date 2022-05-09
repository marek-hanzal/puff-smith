import {MixtureJob} from "@/puff-smith/cli/jobs/mixture";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"MixtureUpdate", { aromaId: string | "all" }, any>(async ({request, toUserId}) => MixtureJob.schedule(request, toUserId()));
