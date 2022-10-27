import {
	asyncContainer,
	ContainerClass
}                    from "@/puff-smith/service/Container";
import {GetEndpoint} from "@leight-core/viv";

export default GetEndpoint<ContainerClass, string>({
	name:      "Version",
	container: asyncContainer,
	handler:   async () => process.env.NEXT_PUBLIC_VERSION,
});
