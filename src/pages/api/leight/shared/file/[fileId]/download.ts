import {FetchEndpoint} from "@leight-core/server";

export default FetchEndpoint<"Download", any, { fileId: string }>(({req, res}) => {
	res.status(200).end('ok');
});
