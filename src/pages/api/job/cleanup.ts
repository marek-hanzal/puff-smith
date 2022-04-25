import {IJobQuery, JobService} from "@/puff-smith/service/job";
import {IQueryFilter} from "@leight-core/api";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Cleanup", IQueryFilter<IJobQuery> | undefined, void>(({request}) => JobService().cleanup(request));
