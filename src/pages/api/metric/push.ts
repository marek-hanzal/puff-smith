import {IMetric, IMetricCreate, MetricService} from "@/puff-smith/service/metric";
import {RequestEndpoint} from "@leight-core/server";

export default RequestEndpoint<"MetricPush", IMetricCreate, IMetric>(MetricService().handleCreate);
