import {CertificateSource} from "@/puff-smith/service/certificate/CertificateSource";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {IUserCertificateRequestSource} from "@/puff-smith/service/user/certificate/request/interface";
import {UserSource} from "@/puff-smith/service/user/UserSource";
import {onUnique, pageOf, Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const UserCertificateRequestSource = (): IUserCertificateRequestSource => {
	const userSource = singletonOf(() => UserSource().ofSource(source));
	const certificateSource = singletonOf(() => CertificateSource().ofSource(source));

	const source: IUserCertificateRequestSource = Source<IUserCertificateRequestSource>({
		name: "user.certificate.request",
		prisma,
		map: async userCertificateRequest => ({
			...userCertificateRequest,
			created: userCertificateRequest.created.toUTCString(),
			updated: userCertificateRequest.updated?.toUTCString(),
			user: await userSource().mapNull(userCertificateRequest.user),
			certificate: await certificateSource().map(userCertificateRequest.certificate),
		}),
		source: {
			get: async id => source.prisma.userCertificateRequest.findUniqueOrThrow({
				where: {id},
				include: {
					user: true,
					certificate: {
						include: {
							CertificateToken: {
								include: {
									token: true,
								}
							},
						}
					}
				},
			}),
			count: async ({filter}) => source.prisma.userCertificateRequest.count({
				where: filter,
			}),
			query: async ({filter, orderBy, ...query}) => source.prisma.userCertificateRequest.findMany({
				where: filter,
				orderBy,
				include: {
					user: true,
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
				...pageOf(query),
			}),
			create: async ({certificateId}) => source.prisma.userCertificateRequest.create({
				data: {
					certificateId,
					userId: source.user.required(),
					created: new Date(),
				},
				include: {
					user: true,
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
			}),
			remove: async ids => {
				const where = {
					id: {
						in: ids,
					},
					userId: source.user.required(),
				};
				return prisma.$transaction(async prisma => {
					const userCertificateRequest = await prisma.userCertificateRequest.findMany({
						where,
						include: {
							user: true,
							certificate: {
								include: {
									CertificateToken: {
										include: {
											token: true,
										}
									},
								}
							}
						},
					});
					await prisma.userCertificateRequest.deleteMany({
						where,
					});
					return userCertificateRequest;
				});
			}
		},
		approve: async ({id}) => {
			const approverId = source.user.required();
			const $userCertificateRequest = await source.get(id);
			try {
				const userCertificate = await source.prisma.userCertificate.create({
					data: {
						userId: $userCertificateRequest.userId,
						certificateId: $userCertificateRequest.certificateId,
					},
					include: {
						user: true,
						certificate: {
							include: {
								CertificateToken: {
									include: {
										token: true,
									}
								},
							}
						}
					},
				});
				await source.prisma.userCertificateRequest.update({
					where: {id},
					data: {
						status: 1,
						approverId,
						updated: new Date(),
						userCertificateId: userCertificate.id,
					}
				});
			} catch (e) {
				onUnique(e, async () => {
				});
			}
			return true;
		},
		decline: async ({id}) => {
			const approverId = source.user.required();
			await source.prisma.userCertificateRequest.update({
				where: {id},
				data: {
					status: 0,
					approverId,
					updated: new Date(),
				}
			});
			return true;
		},
	});

	return source;
};
