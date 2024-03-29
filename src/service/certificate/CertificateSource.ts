import {ICertificateSource} from "@/puff-smith/service/certificate/interface";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TokenSource} from "@/puff-smith/service/token/TokenSource";
import {UserCertificateRequestSource} from "@/puff-smith/service/user/certificate/request/UserCertificateRequestSource";
import {ClientError} from "@leight-core/api";
import {onUnique, pageOf, Source} from "@leight-core/server";
import {merge, singletonOf} from "@leight-core/utils";

export const CertificateSource = (): ICertificateSource => {
	const tokenSource = singletonOf(() => TokenSource().ofSource(source));
	const userCertificateRequestSource = singletonOf(() => UserCertificateRequestSource().ofSource(source));
	const codeService = singletonOf(() => CodeService());

	const source: ICertificateSource = Source<ICertificateSource>({
		name: "certificate",
		prisma,
		map: async ({id, name, code, cost, ...certificate}) => ({
			id,
			name,
			code,
			cost,
			tokens: await tokenSource().list(Promise.resolve(certificate.CertificateToken.map(({token}) => token))),
			isOwned: certificate.UserCertificate ? certificate.UserCertificate.length > 0 : undefined,
			request: await userCertificateRequestSource().mapNull(certificate.UserCertificateRequest?.[0]),
		}),
		source: {
			get: async id => source.prisma.certificate.findUniqueOrThrow({
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
					UserCertificateRequest: {
						where: {
							userId: source.user.required(),
						},
						include: {
							certificate: {
								include: {
									CertificateToken: {
										include: {
											token: true,
										}
									},
								},
							},
						},
					},
				},
			}),
			count: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.certificate.count({
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
					UserCertificateRequest: {
						where: {
							userId: source.user.required(),
						},
						include: {
							certificate: {
								include: {
									CertificateToken: {
										include: {
											token: true,
										}
									},
								},
							},
						},
					},
				},
				orderBy: [
					{name: "asc"},
				],
				...pageOf(query),
			}),
			create: async ({name, code, cost, tokens = []}) => {
				const $canUpdate = source.user.hasAny([
					"*",
					`${source.name}.patch`,
				]);
				const $create = {
					name,
					code: code || codeService().code(),
					cost,
					CertificateToken: {
						createMany: {
							data: (await tokenSource().fetchByNames(tokens)).map(({id: tokenId}) => ({
								tokenId,
							})),
							skipDuplicates: true,
						}
					}
				};
				try {
					return await source.prisma.certificate.create({
						data: $create,
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
							UserCertificateRequest: {
								where: {
									userId: source.user.required(),
								},
								include: {
									certificate: {
										include: {
											CertificateToken: {
												include: {
													token: true,
												}
											},
										},
									},
								},
							},
						},
					});
				} catch (e) {
					return onUnique(e, async () => {
						if (!$canUpdate) {
							throw new ClientError("Certificate already exists.", 409);
						}
						return source.patch({
							...$create,
							tokens,
							id: (await source.prisma.certificate.findFirstOrThrow({
								where: {
									OR: [
										{code: $create.code},
										{name: $create.name},
									],
								},
								select: {
									id: true,
								},
							})).id
						});
					});
				}
			},
			patch: async ({id, ...patch}) => source.prisma.certificate.update({
				where: {id},
				data: patch,
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
					UserCertificateRequest: {
						where: {
							userId: source.user.required(),
						},
						include: {
							certificate: {
								include: {
									CertificateToken: {
										include: {
											token: true,
										}
									},
								},
							},
						},
					},
				},
			}),
			remove: async ids => {
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
						UserCertificateRequest: {
							where: {
								userId: source.user.required(),
							},
							include: {
								certificate: {
									include: {
										CertificateToken: {
											include: {
												token: true,
											}
										},
									},
								},
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
