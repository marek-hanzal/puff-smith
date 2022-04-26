import {IMetricService} from "@/puff-smith/service/metric/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {UserService} from "@/puff-smith/service/user/UserService";
import {IPrismaClientTransaction} from "@leight-core/api";
import {RepositoryService} from "@leight-core/server";

export const MetricService = (prismaClient: IPrismaClientTransaction = prisma): IMetricService => {
	return RepositoryService<IMetricService>({
		name: "metric",
		source: prismaClient.metric,
		mapper: async entity => ({
			...entity,
			start: entity?.start?.toNumber() || 0,
			value: entity.value.toNumber(),
			user: entity.userId ? await UserService(prismaClient).toMap(entity.userId) : null,
		}),
		create: async ({userId, ...create}) => prismaClient.metric.create({
			data: {
				...create,
				userId,
			}
		}),
	});
};
