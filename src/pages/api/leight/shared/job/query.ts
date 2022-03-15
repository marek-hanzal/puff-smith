import {QueryEndpoint} from "@leight-core/server";
import {IJob} from "@leight-core/api";
import {IJobFilter, IJobOrderBy, IJobQuery, jobQuery} from "@/puff-smith/service/job";

export default QueryEndpoint<"Jobs", IJobQuery, IJob, IJobFilter, IJobOrderBy>(async ({req: {body}}) => await jobQuery(body));
