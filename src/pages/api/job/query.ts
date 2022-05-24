import {IJobSource} from "@/puff-smith/service/job/interface";
import {JobSource} from "@/puff-smith/service/job/JobSource";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Job", IJobSource>(JobSource());
