import {GetEndpoint} from "@leight-core/server";

export default GetEndpoint<"Version", string>({
	handler: async () => process.env.NEXT_PUBLIC_VERSION,
});
