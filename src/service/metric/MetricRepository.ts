import {IMetricRepository, IMetricRepositoryCreate} from "@/puff-smith/service/metric/interface";
import {UserRepository} from "@/puff-smith/service/user/UserRepository";
import {Repository} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const MetricRepository = (request: IMetricRepositoryCreate): IMetricRepository => {
	const userRepository = singletonOf(() => UserRepository(request));
	const userId = request.userService.getOptionalUserId();

	return Repository<IMetricRepository>({
		name: "metric",
		source: request.prisma.metric,
		mapper: async entity => ({
			...entity,
			start: entity?.start || 0,
			user: entity.userId ? await userRepository().toMap(entity.userId) : null,
		}),
		create: async create => request.prisma.metric.create({
			data: {
				...create,
				userId,
			}
		}),
	});
};
