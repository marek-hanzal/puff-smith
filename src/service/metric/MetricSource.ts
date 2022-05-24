import {IMetricSource} from "@/puff-smith/service/metric/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {Source} from "@leight-core/server";

export const MetricSource = (): IMetricSource => {
	const source: IMetricSource = Source<IMetricSource>({
		name: "metric",
		prisma,
		map: async entity => ({
			...entity,
			start: entity?.start || 0,
		}),
		source: {
			create: async create => source.prisma.metric.create({
				data: {
					...create,
					userId: source.user.optional(),
				}
			}),
		}
	});

	return source;
};
