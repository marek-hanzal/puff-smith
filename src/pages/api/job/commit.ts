import {ofRequest} from "@/puff-smith/service";
import {JobService} from "@/puff-smith/service/job/JobService";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Commit", void, void>(async params => JobService(ofRequest(params)).commit());
