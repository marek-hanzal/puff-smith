import {ofRequest} from "@/puff-smith/service";
import {IJobQuery} from "@/puff-smith/service/job/interface";
import {JobService} from "@/puff-smith/service/job/JobService";
import {IQueryFilter} from "@leight-core/api";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Cleanup", IQueryFilter<IJobQuery> | undefined, void>(async params => JobService(ofRequest(params)).cleanup(params.request));
