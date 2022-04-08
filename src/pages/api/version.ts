import {ServerBootstrap} from "@/puff-smith/service/bootstrap";
import {FetchEndpoint} from "@leight-core/server";

ServerBootstrap();

export default FetchEndpoint<"Version", string>(async () => {
	return process.env.NEXT_PUBLIC_VERSION;
});

