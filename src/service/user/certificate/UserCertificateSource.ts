import {CertificateSource} from "@/puff-smith/service/certificate/CertificateSource";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {IUserCertificateSource} from "@/puff-smith/service/user/certificate/interface";
import {pageOf, Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const UserCertificate = (): IUserCertificateSource => {
	const certificateSource = singletonOf(() => CertificateSource().ofSource(source));

	const source: IUserCertificateSource = Source<IUserCertificateSource>({
		name: "user.certificate",
		prisma,
		map: async userCertificate => userCertificate ? {
			...userCertificate,
			certificate: await certificateSource().mapper.map(userCertificate.certificate),
		} : undefined,
		acl: {
			lock: true,
		},
		source: {
			get: async id => source.prisma.userCertificate.findUnique({
				where: {id},
				include: {
					certificate: {
						include: {
							CertificateToken: {
								include: {
									token: true,
								}
							}
						}
					}
				},
				rejectOnNotFound: true,
			}),
			count: async () => source.prisma.userCertificate.count({
				where: {
					userId: source.user.required(),
				},
			}),
			query: async ({orderBy, ...query}) => source.prisma.userCertificate.findMany({
				where: {
					userId: source.user.required(),
				},
				orderBy,
				include: {
					certificate: {
						include: {
							CertificateToken: {
								include: {
									token: true,
								}
							}
						}
					}
				},
				...pageOf(query),
			}),
			create: async ({certificateId}) => source.prisma.userCertificate.create({
				data: {
					userId: source.user.required(),
					certificateId,
				},
				include: {
					certificate: {
						include: {
							CertificateToken: {
								include: {
									token: true,
								}
							}
						}
					}
				},
			}),
			delete: async ids => {
				const where = {
					id: {
						in: ids,
					},
					userId: source.user.required(),
				};
				return prisma.$transaction(async prisma => {
					const userCertificate = await prisma.userCertificate.findMany({
						where,
						include: {
							certificate: {
								include: {
									CertificateToken: {
										include: {
											token: true,
										}
									}
								}
							}
						},
					});
					await prisma.userCertificate.deleteMany({
						where,
					});
					return userCertificate;
				});
			}
		}
	});

	return source;
};
