import {IMixtureUserJobParams} from "@/puff-smith/jobs/mixture/interface";
import {MixtureUserJob} from "@/puff-smith/jobs/mixture/job";
import {IJob} from "@leight-core/api";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"MixtureUserJob", IMixtureUserJobParams, IJob<IMixtureUserJobParams>>({
	handler: MixtureUserJob.request,
});
