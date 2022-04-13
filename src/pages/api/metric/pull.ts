import {FetchEndpoint} from "@leight-core/server";
import {register} from "prom-client";

export default FetchEndpoint<"MetricPull", any>(async ({res}) => {
	res.setHeader("Content-type", register.contentType);
	return register.metrics();
});
