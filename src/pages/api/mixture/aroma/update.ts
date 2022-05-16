import {IMixtureJobParams} from "@/puff-smith/cli/jobs/mixture/interface";
import {MixtureJob} from "@/puff-smith/cli/jobs/mixture/job";
import {IJob} from "@leight-core/api";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"MixtureUpdate", IMixtureJobParams, IJob<IMixtureJobParams>>(MixtureJob.request);
