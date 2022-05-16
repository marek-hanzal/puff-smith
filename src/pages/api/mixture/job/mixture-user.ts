import {IMixtureUserJobParams} from "@/puff-smith/cli/jobs/mixture/interface";
import {MixtureUserJob} from "@/puff-smith/cli/jobs/mixture/job";
import {IJob} from "@leight-core/api";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"MixtureUserJob", IMixtureUserJobParams, IJob<IMixtureUserJobParams>>(MixtureUserJob.request);
