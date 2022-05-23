import {IMetricSource, IMetricSourceCreate} from "@/puff-smith/service/metric/interface";
import {UserSource} from "@/puff-smith/service/user/UserSource";
import {Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const MetricSource = (request: IMetricSourceCreate): IMetricSource => {
	const userSource = singletonOf(() => UserSource(request));
	const userId = request.userService.getOptionalUserId();

	return Source<IMetricSource>({
		name: "metric",
		source: request.prisma.metric,
		mapper: async entity => ({
			...entity,
			start: entity?.start || 0,
			user: entity.userId ? await userSource().toMap(entity.userId) : null,
		}),
		create: async create => request.prisma.metric.create({
			data: {
				...create,
				userId,
			}
		}),
	});
};
