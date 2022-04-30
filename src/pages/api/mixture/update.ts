import {MixtureJobName} from "@/puff-smith/agenda/job/mixture";
import {JobService} from "@/puff-smith/service/job/JobService";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"MixtureUpdate", { aromaId: string | null }, any>(async ({request, toUserId}) => JobService().schedule(MixtureJobName, request, toUserId()));
