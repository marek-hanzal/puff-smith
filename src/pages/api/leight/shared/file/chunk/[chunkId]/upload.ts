import {ChunkService} from "@/puff-smith/component/temp";
import {MutationEndpoint} from "@leight-core/server";

export const config = {
	api: {
		bodyParser: false,
	},
}

export default MutationEndpoint<"Upload", string, void, { chunkId: string }>(async ({req, res, toBody}) => {
	ChunkService().chunk(req.query.chunkId, await toBody());
	res.status(200).end('ok');
});
