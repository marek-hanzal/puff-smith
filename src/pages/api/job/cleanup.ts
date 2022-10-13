import {
	asyncContainer,
	ContainerClass
}                  from "@/puff-smith/service/Container";
import {IJobQuery} from "@/puff-smith/service/job/interface";
import {JobSource} from "@/puff-smith/service/job/JobSource";
import {
	MutationEndpoint,
	QueryInfer
}                  from "@leight-core/viv";

export default MutationEndpoint<ContainerClass, QueryInfer.Filter<IJobQuery> | undefined, void>({
	name:      "Cleanup",
	container: asyncContainer,
	handler:   async ({container, request}) => JobSource().withContainer(container).cleanup(request),
});
