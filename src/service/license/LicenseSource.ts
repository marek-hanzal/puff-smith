import {CodeService} from "@/puff-smith/service/code/CodeService";
import {ILicenseSource} from "@/puff-smith/service/license/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TokenSource} from "@/puff-smith/service/token/TokenSource";
import {UserLicenseRequestSource} from "@/puff-smith/service/user/license/request/UserLicenseRequestSource";
import {ClientError} from "@leight-core/api";
import {onUnique, pageOf, Source} from "@leight-core/server";
import {merge, singletonOf} from "@leight-core/utils";

export const LicenseSource = (): ILicenseSource => {
	const tokenSource = singletonOf(() => TokenSource().ofSource(source));
	const userLicenseRequestSource = singletonOf(() => UserLicenseRequestSource().ofSource(source));
	const codeService = singletonOf(() => CodeService());

	const source: ILicenseSource = Source<ILicenseSource>({
		name: "license",
		prisma,
		map: async license => {
			if (!license) {
				return null;
			}
			const {id, name, code, cost} = license;
			return {
				id,
				name,
				code,
				cost,
				tokens: await tokenSource().mapper.list(Promise.resolve(license.LicenseToken.map(({token}) => token))),
				isOwned: license.UserLicense ? license.UserLicense.length > 0 : undefined,
				request: await userLicenseRequestSource().map(license.UserLicenseRequest?.[0]),
			};
		},
		source: {
			get: async id => source.prisma.license.findUniqueOrThrow({
				where: {id},
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
					UserLicenseRequest: {
						where: {
							userId: source.user.required(),
						},
						include: {
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
					},
				},
			}),
			count: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.license.count({
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
					},
					UserLicense: {
						where: {
							userId: source.user.required(),
						},
					},
					UserLicenseRequest: {
						where: {
							userId: source.user.required(),
						},
						include: {
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
					},
				},
				orderBy: [
					{name: "asc"},
				],
				...pageOf(query),
			}),
			create: async ({name, code, cost, renew, duration, tokens = []}) => {
				const $canUpdate = source.user.hasAny([
					"*",
					`${source.name}.patch`,
				]);
				const $create = {
					name,
					code: code || codeService().code(),
					cost,
					renew,
					duration,
					LicenseToken: {
						createMany: {
							data: (await tokenSource().fetchByNames(tokens)).map(({id: tokenId}) => ({
								tokenId,
							})),
							skipDuplicates: true,
						}
					}
				};
				try {
					return await source.prisma.license.create({
						data: $create,
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
							UserLicenseRequest: {
								where: {
									userId: source.user.required(),
								},
								include: {
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
							},
						},
					});
				} catch (e) {
					return onUnique(e, async () => {
						if (!$canUpdate) {
							throw new ClientError("License already exists.", 409);
						}
						return source.patch({
							...$create,
							tokens,
							id: (await source.prisma.license.findFirstOrThrow({
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
			patch: async ({id, name, code, cost, renew, duration, tokens}) => {
				await source.prisma.licenseToken.deleteMany({
					where: {licenseId: id},
				});
				return source.prisma.license.update({
					where: {id},
					data: {
						name,
						code,
						cost,
						renew,
						duration,
						LicenseToken: tokens ? {
							createMany: {
								data: (await tokenSource().fetchByNames(tokens)).map(({id: tokenId}) => ({
									tokenId,
								})),
								skipDuplicates: true,
							}
						} : undefined,
					},
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
						UserLicenseRequest: {
							where: {
								userId: source.user.required(),
							},
							include: {
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
						},
					},
				});
			},
			remove: async ids => {
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
						},
						UserLicense: {
							where: {
								userId: source.user.required(),
							},
						},
						UserLicenseRequest: {
							where: {
								userId: source.user.required(),
							},
							include: {
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
						},
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
