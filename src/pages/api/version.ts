import {GetEndpoint} from "@leight-core/server";

export default GetEndpoint<"Version", string>(async () => process.env.NEXT_PUBLIC_VERSION);
