import {ICertificateSource} from "@/puff-smith/service/certificate/interface";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {pageOf, Source} from "@leight-core/server";
import {merge, singletonOf} from "@leight-core/utils";

export const CertificateSource = (): ICertificateSource => {
	const codeService = singletonOf(() => CodeService());

	const source: ICertificateSource = Source<ICertificateSource>({
		name: "certificate",
		prisma,
		map: async certificate => certificate ? {
			...certificate,
		} : undefined,
		acl: {
			lock: true,
		},
		source: {
			count: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.certificate.count({
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
			query: async ({filter: {fulltext, ...filter} = {}, ...query}) => source.prisma.certificate.findMany({
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
			create: async ({name, code, cost}) => source.prisma.certificate.create({
				data: {
					name,
					code: code || codeService().code(),
					cost,
				},
			}),
			patch: async ({id, name, code, cost}) => source.prisma.certificate.update({
				where: {id},
				data: {
					name,
					code: code || undefined,
					cost,
				}
			}),
			delete: async ids => {
				const where = {
					id: {
						in: ids,
					},
				};
				const items = await prisma.certificate.findMany({
					where,
				});
				await prisma.certificate.deleteMany({
					where,
				});
				return items;
			},
		},
	});

	return source;
};
