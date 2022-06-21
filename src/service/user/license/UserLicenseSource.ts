import {LicenseSource} from "@/puff-smith/service/license/LicenseSource";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TransactionSource} from "@/puff-smith/service/transaction/TransactionSource";
import {IUserLicenseSource} from "@/puff-smith/service/user/license/interface";
import {ClientError} from "@leight-core/api";
import {pageOf, Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const UserLicenseSource = (): IUserLicenseSource => {
	const licenseSource = singletonOf(() => LicenseSource().ofSource(source));
	const transactionSource = singletonOf(() => TransactionSource().ofSource(source));

	const source: IUserLicenseSource = Source<IUserLicenseSource>({
		name: "user.license",
		prisma,
		map: async userLicense => userLicense ? {
			...userLicense,
			license: await licenseSource().mapper.map(userLicense.license),
		} : undefined,
		acl: {
			lock: true,
		},
		source: {
			get: async id => source.prisma.userLicense.findUnique({
				where: {id},
				include: {
					license: {
						include: {
							LicenseToken: {
								include: {
									token: true,
								}
							},
							UserLicense: {
								where: {
									userId: source.user.required(),
								},
							},
						}
					}
				},
				rejectOnNotFound: true,
			}),
			count: async () => source.prisma.userLicense.count({
				where: {
					userId: source.user.required(),
				},
			}),
			query: async ({orderBy, ...query}) => source.prisma.userLicense.findMany({
				where: {
					userId: source.user.required(),
				},
				orderBy,
				include: {
					license: {
						include: {
							LicenseToken: {
								include: {
									token: true,
								}
							},
							UserLicense: {
								where: {
									userId: source.user.required(),
								},
							},
						}
					}
				},
				...pageOf(query),
			}),
			create: async ({licenseId}) => prisma.$transaction(async prisma => {
				const userId = source.user.required();
				const license = await licenseSource().withPrisma(prisma).get(licenseId);
				if (!license.cost) {
					throw new ClientError("Cannot acquire license without a cost.");
				}
				return transactionSource().withPrisma(prisma).handleTransaction({
					userId,
					cost: license.cost,
					note: "Purchase of license",
					callback: async transaction => source.prisma.userLicense.create({
						data: {
							userId,
							licenseId,
							transactionId: transaction.id,
						},
						include: {
							license: {
								include: {
									LicenseToken: {
										include: {
											token: true,
										}
									},
									UserLicense: {
										where: {
											userId: source.user.required(),
										},
									},
								}
							}
						},
					}),
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
					const userLicense = await prisma.userLicense.findMany({
						where,
						include: {
							license: {
								include: {
									LicenseToken: {
										include: {
											token: true,
										}
									},
									UserLicense: {
										where: {
											userId: source.user.required(),
										},
									},
								}
							}
						},
					});
					await prisma.userLicense.deleteMany({
						where,
					});
					return userLicense;
				});
			}
		}
	});

	return source;
};
