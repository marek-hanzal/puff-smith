import {IMetric, IMetricCreate} from "@/puff-smith/service/metric/interface";
import {MetricService} from "@/puff-smith/service/metric/MetricService";
import {RequestEndpoint} from "@leight-core/server";

export default RequestEndpoint<"MetricPush", Omit<IMetricCreate, "userId">, IMetric>(async ({request, toMaybeUserId}) => MetricService().handleCreate({
	request: {
		...request,
		userId: toMaybeUserId(),
	}
}));
