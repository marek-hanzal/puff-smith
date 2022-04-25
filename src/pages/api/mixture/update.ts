import {MixtureJobName} from "@/puff-smith/agenda/job/mixture";
import {JobService} from "@/puff-smith/service/job";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"MixtureUpdate", void, any>(async ({toUserId}) => JobService().schedule(MixtureJobName, undefined, toUserId()));
