import {ofParams} from "@/puff-smith/service";
import {JobSource} from "@/puff-smith/service/job/JobSource";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Commit", void, void>(async params => JobSource(ofParams(params)).commit());
