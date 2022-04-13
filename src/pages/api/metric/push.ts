import {IMetric, IMetricCreate, MetricService} from "@/puff-smith/service/metric";
import {RequestEndpoint} from "@leight-core/server";

export default RequestEndpoint<"MetricPush", Omit<IMetricCreate, "userId">, IMetric>(async ({request, toMaybeUserId}) => {
	return MetricService().handleCreate({
		request: {
			...request,
			userId: toMaybeUserId(),
		}
	});
});
