import {CodeService} from "@/puff-smith/service/code/CodeService";
import {ILicenseSource} from "@/puff-smith/service/license/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TokenSource} from "@/puff-smith/service/token/TokenSource";
import {pageOf, Source} from "@leight-core/server";
import {merge, singletonOf} from "@leight-core/utils";

export const LicenseSource = (): ILicenseSource => {
	const tokenSource = singletonOf(() => TokenSource().ofSource(source));
	const codeService = singletonOf(() => CodeService());

	const source: ILicenseSource = Source<ILicenseSource>({
		name: "license",
		prisma,
		map: async license => license ? {
			...license,
			tokens: await tokenSource().mapper.list(Promise.resolve(license.LicenseToken.map(({token}) => token))),
		} : undefined,
		acl: {
			lock: true,
		},
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
					OR: fulltext ? [
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
					] : undefined,
				}),
				include: {
					LicenseToken: {
						include: {
							token: true,
						}
					}
				},
				orderBy: [
					{name: "asc"},
				],
				...pageOf(query),
			}),
			create: async ({name, code, cost, renew, duration, tokens = []}) => source.prisma.license.create({
				data: {
					name,
					code: code || codeService().code(),
					cost,
					renew,
					duration,
					LicenseToken: {
						createMany: {
							data: tokens.map(tokenId => ({
								tokenId,
							})),
							skipDuplicates: true,
						}
					}
				},
				include: {
					LicenseToken: {
						include: {
							token: true,
						}
					}
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
				},
				include: {
					LicenseToken: {
						include: {
							token: true,
						}
					}
				},
			}),
			delete: async ids => {
				const where = {
					id: {
						in: ids,
					},
				};
				const items = await prisma.license.findMany({
					where,
					include: {
						LicenseToken: {
							include: {
								token: true,
							}
						}
					},
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
