import {CertificateSource} from "@/puff-smith/service/certificate/CertificateSource";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionSource} from "@/puff-smith/service/transaction/TransactionSource";
import {IUserCertificateSource} from "@/puff-smith/service/user/certificate/interface";
import {ClientError} from "@leight-core/api";
import {pageOf, Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const UserCertificateSource = (): IUserCertificateSource => {
	const certificateSource = singletonOf(() => CertificateSource().ofSource(source));
	const transactionSource = singletonOf(() => TransactionSource().ofSource(source));

	const source: IUserCertificateSource = Source<IUserCertificateSource>({
		name: "user.certificate",
		prisma,
		map: async userCertificate => userCertificate ? {
			...userCertificate,
			certificate: await certificateSource().mapper.map(userCertificate.certificate),
		} : null,
		source: {
			get: async id => source.prisma.userCertificate.findUniqueOrThrow({
				where: {id},
				include: {
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
			count: async ({filter}) => source.prisma.userCertificate.count({
				where: filter,
			}),
			query: async ({filter, orderBy, ...query}) => source.prisma.userCertificate.findMany({
				where: filter,
				orderBy,
				include: {
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
				...pageOf(query),
			}),
			create: async ({certificateId}) => prisma.$transaction(async prisma => {
				const userId = source.user.required();
				const certificate = await certificateSource().withPrisma(prisma).get(certificateId);
				if (!certificate.cost) {
					throw new ClientError("Cannot acquire certificate without a cost.");
				}
				return transactionSource().withPrisma(prisma).handleTransaction({
					userId,
					cost: certificate.cost,
					note: "Purchase of certificate",
					callback: async transaction => source.prisma.userCertificate.create({
						data: {
							userId,
							certificateId,
							transactionId: transaction.id,
						},
						include: {
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
				});
			}),
			remove: async ids => {
				const where = {
					id: {
						in: ids,
					},
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
									},
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
