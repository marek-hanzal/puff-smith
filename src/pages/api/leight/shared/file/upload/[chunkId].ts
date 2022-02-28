import {MutationEndpoint} from "@leight-core/endpoint";

// export const config = {
// 	api: {
// 		bodyParser: false,
// 	},
// }

export default MutationEndpoint<"Upload", string, void, { chunkId: string }>(({req, res}) => {
	res.status(200).end();
});
