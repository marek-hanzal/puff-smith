import {
	ContainerClass,
	ContainerPromise
}                         from "@/puff-smith/service/Container";
import {IJobQuery}        from "@/puff-smith/service/job/interface";
import {JobSource}        from "@/puff-smith/service/job/JobSource";
import {QueryInfer}       from "@leight-core/api";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<ContainerClass, QueryInfer.Filter<IJobQuery> | undefined, void>({
	name:      "Cleanup",
	container: ContainerPromise,
	handler:   async ({container, request}) => JobSource().withContainer(container).cleanup(request),
});
