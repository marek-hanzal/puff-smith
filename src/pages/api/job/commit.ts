import {ContainerPromise} from "@/puff-smith/service/Container";
import {JobSource}        from "@/puff-smith/service/job/JobSource";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint({
	name:      "Commit",
	container: ContainerPromise,
	handler:   async ({container}) => JobSource().withContainer(container).commit(),
});
