import {JobSource}        from "@/puff-smith/service/job/JobSource";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Commit", void, void>({
	handler: async () => JobSource().commit(),
});
