import {FetchEndpoint} from "@leight-core/server";

export default FetchEndpoint<"Download", boolean, { fileId: string }>(async () => true);
