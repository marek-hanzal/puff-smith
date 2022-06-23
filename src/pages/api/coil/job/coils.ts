import {ICoilsJobParams} from "@/puff-smith/jobs/coil/interface";
import {CoilsJob} from "@/puff-smith/jobs/coil/job";
import {IJob} from "@leight-core/api";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"CoilsJob", ICoilsJobParams, IJob<ICoilsJobParams>>({
	handler: CoilsJob.request,
});
