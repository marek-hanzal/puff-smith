import {
	ContainerClass,
	ContainerPromise
} from "@/puff-smith/service/Container";
import {
	Endpoint,
	GenerateEndpoint
} from "@leight-core/server";

export default Endpoint<ContainerClass, void, string[]>(GenerateEndpoint({
	name:      "Generate",
	container: ContainerPromise,
}));
