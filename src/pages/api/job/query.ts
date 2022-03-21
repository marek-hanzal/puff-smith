import {QueryEndpoint} from "@leight-core/server";
import {IJob} from "@leight-core/api";
import {IJobQuery, jobQuery} from "@/puff-smith/service/job";

export default QueryEndpoint<"Jobs", IJobQuery, IJob>(async ({req: {body}}) => jobQuery(body));
