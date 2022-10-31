import {
    asyncContainer,
    ContainerClass
}                    from "@/puff-smith/service/Container";
import {GetEndpoint} from "@leight-core/viv";

export default GetEndpoint<ContainerClass, number>({
	name:      "Puffies",
	container: asyncContainer,
	handler:   async ({}) => -1,
});