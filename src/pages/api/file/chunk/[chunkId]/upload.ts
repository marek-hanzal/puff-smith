import {chunkService} from "@/puff-smith/service/chunk/service";
import {Endpoint, IChunkEndpointQuery, UploadChunkEndpoint} from "@leight-core/server";

export const config = {
	api: {
		bodyParser: false,
	},
};

export default Endpoint<"Upload", string, void, IChunkEndpointQuery>(UploadChunkEndpoint({chunkService}));
