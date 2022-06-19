import {CodeService} from "@/puff-smith/service/code/CodeService";
import {ILicenseSource} from "@/puff-smith/service/license/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {pageOf, Source} from "@leight-core/server";
import {merge, singletonOf} from "@leight-core/utils";

export const LicenseSource = (): ILicenseSource => {
	const codeService = singletonOf(() => CodeService());

	const source: ILicenseSource = Source<ILicenseSource>({
		name: "license",
		prisma,
		map: async license => license ? {
			...license,
		} : undefined,
		source: {
			count: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.license.count({
				where: merge(filter, {
					OR: [
						{
							name: {
								contains: fulltext,
								mode: "insensitive",
							},
						},
						{
							code: {
								contains: fulltext,
								mode: "insensitive",
							},
						},
					],
				}),
			}),
			query: async ({filter: {fulltext, ...filter} = {}, ...query}) => source.prisma.license.findMany({
				where: merge(filter, {
					OR: [
						{
							name: {
								contains: fulltext,
								mode: "insensitive",
							},
						},
						{
							code: {
								contains: fulltext,
								mode: "insensitive",
							},
						},
					],
				}),
				orderBy: [
					{name: "asc"},
				],
				...pageOf(query),
			}),
			create: async ({name, code, cost, renew, duration}) => source.prisma.license.create({
				data: {
					name,
					code: code || codeService().code(),
					cost,
					renew,
					duration,
				},
			}),
			patch: async ({id, name, code, cost, renew, duration}) => source.prisma.license.update({
				where: {id},
				data: {
					name,
					code: code || undefined,
					cost,
					renew,
					duration,
				}
			}),
			delete: async ids => {
				const where = {
					id: {
						in: ids,
					},
				};
				const items = await prisma.license.findMany({
					where,
				});
				await prisma.license.deleteMany({
					where,
				});
				return items;
			},
		},
	});

	return source;
};
