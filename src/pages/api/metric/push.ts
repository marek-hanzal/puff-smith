import {ServiceCreate} from "@/puff-smith/service";
import {IMetric, IMetricCreate} from "@/puff-smith/service/metric/interface";
import {MetricService} from "@/puff-smith/service/metric/MetricService";
import {RequestEndpoint} from "@leight-core/server";

export default RequestEndpoint<"MetricPush", IMetricCreate, IMetric>(async ({request, toMaybeUserId}) => MetricService(ServiceCreate(toMaybeUserId())).handleCreate({request}));
