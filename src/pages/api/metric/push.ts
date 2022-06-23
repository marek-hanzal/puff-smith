import {IMetricCreate} from "@/puff-smith/service/metric/interface";
import {RequestEndpoint} from "@leight-core/server";

export default RequestEndpoint<"MetricPush", IMetricCreate, boolean>({
	handler: async ({request, user}) => {
		return false;
		// MetricService(ServiceCreate(toMaybeUserId())).handleCreate({request});
	},
});
