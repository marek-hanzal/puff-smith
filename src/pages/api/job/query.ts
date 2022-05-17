import {ofRequest} from "@/puff-smith/service";
import {IJobQuery} from "@/puff-smith/service/job/interface";
import {JobService} from "@/puff-smith/service/job/JobService";
import {IJob} from "@leight-core/api";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Job", IJobQuery, IJob>(async params => JobService(ofRequest(params)).handleQuery(params));
