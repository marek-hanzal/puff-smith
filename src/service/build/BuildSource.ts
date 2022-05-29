import {IBuildSource} from "@/puff-smith/service/build/interface";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TariffSource} from "@/puff-smith/service/tariff/TariffSource";
import {pageOf, Source} from "@leight-core/server";
import {merge, singletonOf} from "@leight-core/utils";

export const BuildSource = (): IBuildSource => {
	const codeService = singletonOf(() => CodeService());

	const source: IBuildSource = Source<IBuildSource>({
		name: "build",
		prisma,
		map: async build => build ? ({
			...build,
		}) : undefined,
		source: {
			count: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.build.count({
				where: merge(filter, {
					userId: source.user.required(),
				}),
			}),
			query: async ({filter: {fulltext, ...filter} = {}, orderBy, ...query}) => source.prisma.build.findMany({
				where: merge(filter, {
					userId: source.user.required(),
				}),
				orderBy,
				...pageOf(query),
			}),
			create: async ({code, created, ...build}) => prisma.$transaction(prisma => {
				const userId = source.user.required();
				const tariffSource = TariffSource().withPrisma(prisma);

				return tariffSource.transactionOf({
					tariff: "default",
					userId,
					price: "lab.build.create",
					note: "New build",
					callback: async (_, transaction) => {
						return prisma.build.create({
							data: {
								...build,
								archived: false,
								created: created?.toUTCString() || new Date(),
								code: code || codeService().code(),
								userId: source.user.required(),
								transactionId: transaction.id,
							},
						});
					}
				});
			}),
			delete: async ids => {
				const where = {
					id: {
						in: ids,
					},
					userId: source.user.required(),
				};
				return prisma.$transaction(async prisma => {
					const builds = await prisma.build.findMany({
						where,
					});
					await prisma.build.deleteMany({
						where,
					});
					return builds;
				});
			}
		}
	});

	return source;
};
