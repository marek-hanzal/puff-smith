import {ofParams} from "@/puff-smith/service";
import {IJobQuery} from "@/puff-smith/service/job/interface";
import {JobRepository} from "@/puff-smith/service/job/JobRepository";
import {IQueryFilter} from "@leight-core/api";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Cleanup", IQueryFilter<IJobQuery> | undefined, void>(async params => JobRepository(ofParams(params)).cleanup(params.request));
