import {FetchEndpoint} from "@leight-core/server";

export default FetchEndpoint<"Download", string, { fileId: string }>(async () => {
	return 'ok';
});
