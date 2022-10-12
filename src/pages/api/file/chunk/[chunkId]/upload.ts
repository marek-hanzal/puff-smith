import {chunkService} from "@/puff-smith/service/chunk/service";
import {
	ContainerClass,
	ContainerPromise
}                     from "@/puff-smith/service/Container";
import {
	Endpoint,
	IChunkEndpointQuery,
	UploadChunkEndpoint
}                     from "@leight-core/server";

export const config = {
	api: {
		bodyParser: false,
	},
};

export default Endpoint<ContainerClass, string, void, IChunkEndpointQuery>(UploadChunkEndpoint({
	container: ContainerPromise,
	chunkService,
}));
