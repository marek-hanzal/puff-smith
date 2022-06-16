import {IJobSource} from "@/puff-smith/service/job/interface";
import {JobSource} from "@/puff-smith/service/job/JobSource";
import {CountEndpoint} from "@leight-core/server";

export default CountEndpoint<"JobCount", IJobSource>(JobSource);
