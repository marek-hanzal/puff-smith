import {CoilsJob} from "@/puff-smith/cli/jobs/coil/job";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"CoilUpdate", any, any>(CoilsJob.request);
