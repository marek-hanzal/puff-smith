import {ICoilsJobParams} from "@/puff-smith/cli/jobs/coil/interface";
import {CoilsJob} from "@/puff-smith/cli/jobs/coil/job";
import {IJob} from "@leight-core/api";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"CoilsJob", ICoilsJobParams, IJob<ICoilsJobParams>>(CoilsJob.request);
