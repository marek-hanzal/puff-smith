import {ofParams} from "@/puff-smith/service";
import {IJobQuery} from "@/puff-smith/service/job/interface";
import {JobSource} from "@/puff-smith/service/job/JobSource";
import {IQueryFilter} from "@leight-core/api";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Cleanup", IQueryFilter<IJobQuery> | undefined, void>(async params => JobSource(ofParams(params)).cleanup(params.request));
