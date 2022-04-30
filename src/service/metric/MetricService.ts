import {ServiceCreate} from "@/puff-smith/service";
import {IMetricService, IMetricServiceCreate} from "@/puff-smith/service/metric/interface";
import {UserService} from "@/puff-smith/service/user/UserService";
import {RepositoryService} from "@leight-core/server";

export const MetricService = (request: IMetricServiceCreate = ServiceCreate()): IMetricService => {
	return RepositoryService<IMetricService>({
		name: "metric",
		source: request.prisma.metric,
		mapper: async entity => ({
			...entity,
			start: entity?.start?.toNumber() || 0,
			value: entity.value.toNumber(),
			user: entity.userId ? await UserService(request).toMap(entity.userId) : null,
		}),
		create: async create => request.prisma.metric.create({
			data: {
				...create,
				userId: request.userService.getOptionalUserId(),
			}
		}),
	});
};
