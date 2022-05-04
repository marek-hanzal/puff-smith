import {JOB_NAME} from "@/puff-smith/cli/jobs/mixture";
import {JobService} from "@/puff-smith/service/job/JobService";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"MixtureUpdate", { aromaId: string | null }, any>(async ({request, toUserId}) => JobService().schedule(JOB_NAME, request, toUserId()));
