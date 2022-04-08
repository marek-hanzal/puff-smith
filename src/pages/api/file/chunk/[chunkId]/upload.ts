import {ServerBootstrap} from "@/puff-smith/service/bootstrap";
import {chunkService} from "@/puff-smith/service/chunk";
import {Endpoint, IChunkEndpointQuery, UploadChunkEndpoint} from "@leight-core/server";

ServerBootstrap();

export const config = {
	api: {
		bodyParser: false,
	},
};

export default Endpoint<"Upload", string, void, IChunkEndpointQuery>(UploadChunkEndpoint(chunkService));
