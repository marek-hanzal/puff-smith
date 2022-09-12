import {PriceSource} from "@/puff-smith/service/price/PriceSource";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TokenSource} from "@/puff-smith/service/token/TokenSource";
import {TransactionSource} from "@/puff-smith/service/transaction/TransactionSource";
import {IUserSource} from "@/puff-smith/service/user/interface";
import {UserTokenSource} from "@/puff-smith/service/user/token/UserTokenSource";
import {onUnique, pageOf, Source, User} from "@leight-core/server";
import {singletonOf, uniqueOf} from "@leight-core/utils";

export const UserSource = (): IUserSource => {
	const tokenSource = singletonOf(() => TokenSource().ofSource(source));
	const userTokenSource = singletonOf(() => UserTokenSource().ofSource(source));
	const transactionSource = singletonOf(() => TransactionSource().ofSource(source));
	const priceSource = singletonOf(() => PriceSource().ofSource(source));

	const source: IUserSource = Source<IUserSource>({
		name: "user",
		prisma,
		map: async user => {
			const {
				UserToken,
				UserCertificate = [],
				UserLicense = [],
				name,
				id,
				image,
				email,
			} = user;
			let tokens = UserToken?.map(({token}) => token) || [];
			const tokenIds = UserToken?.map(({token}) => token.id) || [];

			for (const {certificate} of UserCertificate) {
				tokens = tokens.concat(certificate.CertificateToken.map(({token}) => token)).concat([{
					id: `certificate.${certificate.name}`,
					name: `certificate.${certificate.name}`,
				}]);
			}
			for (const {license} of UserLicense) {
				tokens = tokens.concat(license.LicenseToken.map(({token}) => token)).concat([{
					id: `license.${license.name}`,
					name: `license.${license.name}`,
				}]);
			}
			return {
				id,
				name,
				email,
				image,
				tokens: uniqueOf(tokens, "name"),
				tokenIds,
			};
		},
		source: {
			get: async id => await source.prisma.user.findUniqueOrThrow({
				where: {id},
				include: {
					UserToken: {
						include: {
							token: true,
						},
					},
					UserCertificate: {
						include: {
							certificate: {
								include: {
									CertificateToken: {
										include: {
											token: true,
										},
									},
								},
							},
						},
					},
					UserLicense: {
						where: {
							OR: [
								{from: {gte: new Date()}, to: {lte: new Date()}},
								{from: {gte: new Date()}, to: null},
								{from: null, to: {lte: new Date()}},
								{from: null, to: null},
							]
						},
						include: {
							license: {
								include: {
									LicenseToken: {
										include: {
											token: true,
										},
									},
								},
							},
						},
					},
				},
			}),
			count: async () => source.prisma.user.count({}),
			query: async ({orderBy, ...query}) => source.prisma.user.findMany({
				orderBy,
				include: {
					UserToken: {
						include: {
							token: true,
						},
					},
					UserCertificate: {
						include: {
							certificate: {
								include: {
									CertificateToken: {
										include: {
											token: true,
										},
									},
								},
							},
						},
					},
					UserLicense: {
						where: {
							OR: [
								{from: {gte: new Date()}, to: {lte: new Date()}},
								{from: {gte: new Date()}, to: null},
								{from: null, to: {lte: new Date()}},
								{from: null, to: null},
							]
						},
						include: {
							license: {
								include: {
									LicenseToken: {
										include: {
											token: true,
										},
									},
								},
							},
						},
					},
				},
				...pageOf(query),
			}),
		},
		async handleRootUser() {
			await transactionSource().create({
				userId: source.user.required(),
				amount: await priceSource().amountOf("default", "welcome-gift.root", 1000000),
				note: "Welcome gift for the Root User!",
			});
			return source.createToken("*");
		},
		async handleCommonUser() {
			await transactionSource().create({
				userId: source.user.required(),
				amount: await priceSource().amountOf("default", "welcome-gift.user", 250),
				note: "Welcome gift!",
			});
			await source.createToken("/lab*");
			await source.createToken("/market*");
			await source.createToken("/inventory*");
			const licenses: string[] = [];
			for (const license of licenses) {
				await source.prisma.userLicense.create({
					data: {
						user: {
							connect: {
								id: source.user.required(),
							}
						},
						license: {
							connect: {
								name: license,
							}
						}
					}
				});
			}
		},
		createToken: async token => {
			const $token = await tokenSource().create({
				name: token,
			});
			try {
				await userTokenSource().create({
					userId: source.user.required(),
					tokenId: $token.id,
				});
			} catch (e) {
				/**
				 * Keep it here as it checks only for unique exceptions, others are re-thrown
				 */
				await onUnique(e, async () => null);
			}
		},
		asUser: async userId => {
			const $user = await source.mapNull(userId ? await source.get(userId) : null);
			return User({
				userId,
				tokens: $user?.tokens?.map(({name}) => name),
			});
		},
	});

	return source;
};
