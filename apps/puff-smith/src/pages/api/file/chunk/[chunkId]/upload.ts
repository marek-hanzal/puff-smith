import {chunkService} from "@/puff-smith/service/chunk/service";
import {
	asyncContainer,
	ContainerClass
}                     from "@/puff-smith/service/Container";
import {
	Endpoint,
	IChunkEndpointQuery,
	UploadChunkEndpoint
}                     from "@leight-core/viv";

export const config = {
	api: {
		bodyParser: false,
	},
};

export default Endpoint<ContainerClass, string, void, IChunkEndpointQuery>(UploadChunkEndpoint({
	container: asyncContainer,
	chunkService,
}));
