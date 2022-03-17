import {Endpoint, IChunkEndpointQuery, UploadChunkEndpoint} from "@leight-core/server";
import {chunkService} from "@/puff-smith/service/chunk";

export const config = {
	api: {
		bodyParser: false,
	},
}

export default Endpoint<"Upload", string, void, IChunkEndpointQuery>(UploadChunkEndpoint(chunkService));
