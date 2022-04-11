import {IJobQuery, jobQuery} from "@/puff-smith/service/job";
import {IJob} from "@leight-core/api";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Jobs", IJobQuery, IJob>(async ({req: {body}}) => jobQuery(body));
