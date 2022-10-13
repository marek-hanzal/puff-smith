import {asyncContainer}   from "@/puff-smith/service/Container";
import {JobSource}        from "@/puff-smith/service/job/JobSource";
import {MutationEndpoint} from "@leight-core/viv";

export default MutationEndpoint({
	name:      "Commit",
	container: asyncContainer,
	handler:   async ({container}) => JobSource().withContainer(container).commit(),
});
