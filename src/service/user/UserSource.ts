import {PriceSource} from "@/puff-smith/service/price/PriceSource";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {TokenSource} from "@/puff-smith/service/token/TokenSource";
import {TransactionSource} from "@/puff-smith/service/transaction/TransactionSource";
import {IUserSource} from "@/puff-smith/service/user/interface";
import {UserTokenSource} from "@/puff-smith/service/user/token/UserTokenSource";
import {onUnique, pageOf, Source, User} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const UserSource = (): IUserSource => {
	const tokenSource = singletonOf(() => TokenSource().ofSource(source));
	const userTokenSource = singletonOf(() => UserTokenSource().ofSource(source));
	const transactionSource = singletonOf(() => TransactionSource().ofSource(source));
	const priceSource = singletonOf(() => PriceSource().ofSource(source));

	const source: IUserSource = Source<IUserSource>({
		name: "user",
		prisma,
		map: async user => user ? {
			...user,
			tokens: user.UserToken.map(({token}) => token),
			tokenIds: user.UserToken.map(({token}) => token.id),
		} : undefined,
		acl: {
			lock: true,
		},
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
			return source.createToken("*");
		},
		async handleCommonUser() {
			await transactionSource().create({
				userId: source.user.required(),
				amount: await priceSource().amountOf("default", "welcome-gift.user", 250),
				note: "Welcome gift!",
			});
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
		asUser: async userId => User(userId, userId ? (await UserSource().withUser(User(undefined, ["*"])).get(userId)).UserToken.map(({token}) => token.name) : []),
	});

	return source;
};
