import {
	ContainerClass,
	ContainerPromise
}                    from "@/puff-smith/service/Container";
import {GetEndpoint} from "@leight-core/server";

export default GetEndpoint<ContainerClass, number>({
	name:      "Puffies",
	container: ContainerPromise,
	handler:   async ({}) => -1,
});
