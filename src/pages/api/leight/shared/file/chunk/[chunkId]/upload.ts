import {MutationEndpoint} from "@leight-core/endpoint";
import {outputFile} from "fs-extra";

export const config = {
	api: {
		bodyParser: false,
	},
}

export default MutationEndpoint<"Chunk", string, void, { chunkId: string }>(async ({req, res}) => {
	await outputFile(`.data/chunk/${req.query.chunkId}`, req.body, {flag: 'a+'});
	res.status(200).end('ok');
});
