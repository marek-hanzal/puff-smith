import {FetchEndpoint} from "@leight-core/endpoint";

export default FetchEndpoint<"Download", any, { fileId: string }>(({req, res}) => {
	res.status(200).end('ok');
});
