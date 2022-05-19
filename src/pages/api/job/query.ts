import {ofRequest} from "@/puff-smith/service";
import {IJobQuery} from "@/puff-smith/service/job/interface";
import {JobRepository} from "@/puff-smith/service/job/JobRepository";
import {IJob} from "@leight-core/api";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Job", IJobQuery, IJob>(async params => JobRepository(ofRequest(params)).handleQuery(params));
