import {LicenseSource} from "@/puff-smith/service/license/LicenseSource";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {IUserLicenseRequestSource} from "@/puff-smith/service/user/license/request/interface";
import {UserSource} from "@/puff-smith/service/user/UserSource";
import {onUnique, pageOf, Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const UserLicenseRequestSource = (): IUserLicenseRequestSource => {
	const userSource = singletonOf(() => UserSource().ofSource(source));
	const licenseSource = singletonOf(() => LicenseSource().ofSource(source));

	const source: IUserLicenseRequestSource = Source<IUserLicenseRequestSource>({
		name: "user.license.request",
		prisma,
		map: async userLicenseRequest => userLicenseRequest ? {
			...userLicenseRequest,
			created: userLicenseRequest.created.toUTCString(),
			updated: userLicenseRequest.updated?.toUTCString(),
			user: await userSource().map(userLicenseRequest.user),
			license: await licenseSource().mapper.map(userLicenseRequest.license),
		} : undefined,
		source: {
			get: async id => source.prisma.userLicenseRequest.findUnique({
				where: {id},
				include: {
					user: true,
					license: {
						include: {
							LicenseToken: {
								include: {
									token: true,
								}
							},
						}
					}
				},
				rejectOnNotFound: true,
			}),
			count: async ({filter}) => source.prisma.userLicenseRequest.count({
				where: filter,
			}),
			query: async ({filter, orderBy, ...query}) => source.prisma.userLicenseRequest.findMany({
				where: filter,
				orderBy,
				include: {
					user: true,
					license: {
						include: {
							LicenseToken: {
								include: {
									token: true,
								}
							},
						},
					},
				},
				...pageOf(query),
			}),
			create: async ({licenseId}) => source.prisma.userLicenseRequest.create({
				data: {
					licenseId,
					userId: source.user.required(),
					created: new Date(),
				},
				include: {
					user: true,
					license: {
						include: {
							LicenseToken: {
								include: {
									token: true,
								}
							},
						},
					},
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
					const userLicenseRequest = await prisma.userLicenseRequest.findMany({
						where,
						include: {
							user: true,
							license: {
								include: {
									LicenseToken: {
										include: {
											token: true,
										}
									},
								}
							}
						},
					});
					await prisma.userLicenseRequest.deleteMany({
						where,
					});
					return userLicenseRequest;
				});
			}
		},
		approve: async ({id}) => {
			const approverId = source.user.required();
			const $userLicenseRequest = await source.get(id);
			try {
				const userLicense = await source.prisma.userLicense.create({
					data: {
						userId: $userLicenseRequest.userId,
						licenseId: $userLicenseRequest.licenseId,
					},
					include: {
						user: true,
						license: {
							include: {
								LicenseToken: {
									include: {
										token: true,
									}
								},
							}
						}
					},
				});
				await source.prisma.userLicenseRequest.update({
					where: {id},
					data: {
						status: 1,
						approverId,
						updated: new Date(),
						userLicenseId: userLicense.id,
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
			await source.prisma.userLicenseRequest.update({
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
