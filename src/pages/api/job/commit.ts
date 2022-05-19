import {ofParams} from "@/puff-smith/service";
import {JobRepository} from "@/puff-smith/service/job/JobRepository";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Commit", void, void>(async params => JobRepository(ofParams(params)).commit());
