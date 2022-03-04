import {Endpoint, UploadChunkEndpoint} from "@leight-core/server";

export const config = {
	api: {
		bodyParser: false,
	},
}

export default Endpoint<"Upload", string, void, { chunkId: string }>(UploadChunkEndpoint());
