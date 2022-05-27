import {PriceSource} from "@/puff-smith/service/price/PriceSource";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TokenSource} from "@/puff-smith/service/token/TokenSource";
import {TransactionSource} from "@/puff-smith/service/transaction/TransactionSource";
import {IUserSource} from "@/puff-smith/service/user/interface";
import {UserTokenSource} from "@/puff-smith/service/user/token/UserTokenSource";
import {onUnique, pageOf, Source} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const UserSource = (): IUserSource => {
	const tokenSource = singletonOf(() => TokenSource());
	const userTokenSource = singletonOf(() => UserTokenSource());
	const transactionSource = singletonOf(() => TransactionSource());
	const priceSource = singletonOf(() => PriceSource());

	const source: IUserSource = Source<IUserSource>({
		name: "user",
		prisma,
		map: async user => user ? {
			...user,
			tokens: user.UserToken.map(({token}) => token),
			tokenIds: user.UserToken.map(({token}) => token.id),
		} : undefined,
		source: {
			get: async id => await source.prisma.user.findUnique({
				where: {id},
				include: {
					UserToken: {
						include: {
							token: true,
						}
					}
				},
				rejectOnNotFound: true,
			}),
			count: async () => source.prisma.user.count({}),
			query: async ({orderBy, ...query}) => source.prisma.user.findMany({
				orderBy,
				include: {
					UserToken: {
						include: {
							token: true,
						}
					}
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
			return Promise.all([
				source.createToken(
					"site.root"
				),
				source.createToken(
					"*"
				)
			]);
		},
		async handleCommonUser() {
			await transactionSource().create({
				userId: source.user.required(),
				amount: await priceSource().amountOf("default", "welcome-gift.user", 250),
				note: "Welcome gift!",
			});
			return Promise.all([
				source.createToken(
					"user"
				),
				source.createToken(
					"site.lab"
				),
				source.createToken(
					"site.market"
				),
				source.createToken(
					"/lab*"
				),
				source.createToken(
					"/market*"
				)
			]);
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
		whoami: async () => source.mapper.map(await source.get(source.user.required())),
	});

	return source;
};