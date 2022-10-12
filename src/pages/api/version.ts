import {
	ContainerClass,
	ContainerPromise
}                    from "@/puff-smith/service/Container";
import {GetEndpoint} from "@leight-core/server";

export default GetEndpoint<ContainerClass, string>({
	name:      "Version",
	container: ContainerPromise,
	handler:   async () => process.env.NEXT_PUBLIC_VERSION,
});
