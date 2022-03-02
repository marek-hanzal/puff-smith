import {MutationEndpoint} from "@leight-core/endpoint";
import {outputFileSync} from "fs-extra";

export const config = {
	api: {
		bodyParser: false,
	},
}

export default MutationEndpoint<"Upload", string, void, { chunkId: string }>(async ({req, res, toBody}) => {
	outputFileSync(`.data/chunk/${req.query.chunkId.split('-').join('/')}`, await toBody(), {flag: 'a'})
	res.status(200).end('ok');
});
