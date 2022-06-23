import {IJobQuery} from "@/puff-smith/service/job/interface";
import {JobSource} from "@/puff-smith/service/job/JobSource";
import {IQueryFilter} from "@leight-core/api";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Cleanup", IQueryFilter<IJobQuery> | undefined, void>({
	handler: async ({request}) => JobSource().cleanup(request),
});
