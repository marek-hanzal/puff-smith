import {ofParams} from "@/puff-smith/service";
import {IJobQuery} from "@/puff-smith/service/job/interface";
import {JobSource} from "@/puff-smith/service/job/JobSource";
import {IJob} from "@leight-core/api";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Job", IJobQuery, IJob>(async params => JobSource(ofParams(params)).handleQuery(params));
