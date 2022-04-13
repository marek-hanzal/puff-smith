import register from "@/puff-smith/service/prometheus";
import {FetchEndpoint} from "@leight-core/server";

export default FetchEndpoint<"MetricPull", any>(async ({res}) => {
	res.setHeader("Content-type", register.contentType);
	return register.metrics();
});
