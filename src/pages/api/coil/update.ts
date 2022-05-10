import {CoilsJob} from "@/puff-smith/cli/jobs/coil";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"CoilUpdate", any, any>(async ({request, toUserId}) => CoilsJob.schedule(request, toUserId()));
