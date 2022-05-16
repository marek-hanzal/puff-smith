import {IMixturesJobParams} from "@/puff-smith/jobs/mixture/interface";
import {MixturesJob} from "@/puff-smith/jobs/mixture/job";
import {IJob} from "@leight-core/api";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"MixturesJob", IMixturesJobParams, IJob<IMixturesJobParams>>(MixturesJob.request);
