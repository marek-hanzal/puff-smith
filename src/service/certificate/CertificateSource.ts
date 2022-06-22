import {ICertificateSource} from "@/puff-smith/service/certificate/interface";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TokenSource} from "@/puff-smith/service/token/TokenSource";
import {pageOf, Source} from "@leight-core/server";
import {merge, singletonOf} from "@leight-core/utils";

export const CertificateSource = (): ICertificateSource => {
	const tokenSource = singletonOf(() => TokenSource().ofSource(source));
	const codeService = singletonOf(() => CodeService());

	const source: ICertificateSource = Source<ICertificateSource>({
		name: "certificate",
		prisma,
		map: async certificate => certificate ? {
			...certificate,
			tokens: await tokenSource().mapper.list(Promise.resolve(certificate.CertificateToken.map(({token}) => token))),
			isOwned: certificate.UserCertificate ? certificate.UserCertificate.length > 0 : undefined,
		} : undefined,
		acl: {
			lock: true,
		},
		source: {
			get: async id => source.prisma.certificate.findUnique({
				where: {id},
				include: {
					CertificateToken: {
						include: {
							token: true,
						}
					},
					UserCertificate: {
						where: {
							userId: source.user.required(),
						},
					},
				},
				rejectOnNotFound: true,
			}),
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
					CertificateToken: {
						include: {
							token: true,
						}
					},
					UserCertificate: {
						where: {
							userId: source.user.required(),
						},
					},
				},
				orderBy: [
					{name: "asc"},
				],
				...pageOf(query),
			}),
			create: async ({name, code, cost, tokens = []}) => source.prisma.certificate.create({
				data: {
					name,
					code: code || codeService().code(),
					cost,
					CertificateToken: {
						createMany: {
							data: tokens.map(tokenId => ({
								tokenId,
							})),
							skipDuplicates: true,
						}
					}
				},
				include: {
					CertificateToken: {
						include: {
							token: true,
						}
					},
					UserCertificate: {
						where: {
							userId: source.user.required(),
						},
					},
				},
			}),
			patch: async ({id, name, code, cost}) => source.prisma.certificate.update({
				where: {id},
				data: {
					name,
					code: code || undefined,
					cost,
				},
				include: {
					CertificateToken: {
						include: {
							token: true,
						}
					},
					UserCertificate: {
						where: {
							userId: source.user.required(),
						},
					},
				},
			}),
			delete: async ids => {
				const where = {
					id: {
						in: ids,
					},
				};
				const items = await prisma.certificate.findMany({
					where,
					include: {
						CertificateToken: {
							include: {
								token: true,
							}
						},
						UserCertificate: {
							where: {
								userId: source.user.required(),
							},
						},
					},
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
