import {ServiceCreate} from "@/puff-smith/service";
import {IMetricService, IMetricServiceCreate} from "@/puff-smith/service/metric/interface";
import {UserService} from "@/puff-smith/service/user/UserService";
import {singletonOf} from "@leight-core/client";
import {RepositoryService} from "@leight-core/server";

export const MetricService = (request: IMetricServiceCreate = ServiceCreate()): IMetricService => {
	const userService = singletonOf(() => UserService(request));
	const userId = request.userService.getOptionalUserId();

	return RepositoryService<IMetricService>({
		name: "metric",
		source: request.prisma.metric,
		mapper: async entity => ({
			...entity,
			start: entity?.start || 0,
			user: entity.userId ? await userService().toMap(entity.userId) : null,
		}),
		create: async create => request.prisma.metric.create({
			data: {
				...create,
				userId,
			}
		}),
	});
};
