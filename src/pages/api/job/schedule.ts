import {ServiceCreate} from "@/puff-smith/service";
import {IJobSchedule} from "@/puff-smith/service/job/interface";
import {JobService} from "@/puff-smith/service/job/JobService";
import {IJob} from "@leight-core/api";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Schedule", IJobSchedule<any>, IJob>(async ({request, toUserId}) => JobService(ServiceCreate(toUserId())).schedule(request));
