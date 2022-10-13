import {
	asyncContainer,
	ContainerClass
} from "@/puff-smith/service/Container";
import {
	Endpoint,
	GenerateEndpoint
} from "@leight-core/viv";

export default Endpoint<ContainerClass, void, string[]>(GenerateEndpoint({
	name:      "Generate",
	container: asyncContainer,
}));
