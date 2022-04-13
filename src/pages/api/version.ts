import {FetchEndpoint} from "@leight-core/server";

export default FetchEndpoint<"Version", string>(async () => process.env.NEXT_PUBLIC_VERSION);
