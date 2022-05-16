import {IMixtureJobParams} from "@/puff-smith/cli/jobs/mixture/interface";
import {MixtureJob} from "@/puff-smith/cli/jobs/mixture/job";
import {IJob} from "@leight-core/api";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"MixtureJob", IMixtureJobParams, IJob<IMixtureJobParams>>(MixtureJob.request);
