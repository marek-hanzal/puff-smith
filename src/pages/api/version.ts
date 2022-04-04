import {FetchEndpoint} from "@leight-core/server";

export default FetchEndpoint<"Version", string>(async () => {
	return process.env.NEXT_PUBLIC_VERSION;
});

