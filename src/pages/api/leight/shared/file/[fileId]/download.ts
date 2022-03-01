import {FetchEndpoint} from "@leight-core/endpoint";

export default FetchEndpoint<"Download", void, { fileId: string }>(({req, res}) => {
	res.status(200).end('ok');
});
