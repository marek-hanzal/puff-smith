import {PriceSource} from "@/puff-smith/service/price/PriceSource";
import {TokenSource} from "@/puff-smith/service/token/TokenSource";
import {TransactionSource} from "@/puff-smith/service/transaction/TransactionSource";
import {IUserSource, IUserSourceCreate} from "@/puff-smith/service/user/interface";
import {UserTokenSource} from "@/puff-smith/service/user/token/UserTokenSource";
import {onUnique, Source, toFulltext} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";
import deepmerge from "deepmerge";

export const UserSource = (request: IUserSourceCreate): IUserSource => {
	const userSource = singletonOf(() => UserSource(request));
	const tokenSource = singletonOf(() => TokenSource(request));
	const userTokenSource = singletonOf(() => UserTokenSource(request));
	const transactionSource = singletonOf(() => TransactionSource(request));
	const priceSource = singletonOf(() => PriceSource(request));
	const userId = singletonOf(() => request.userService.getUserId());

	return {
		...Source<IUserSource>({
			name: "user",
			source: request.prisma.user,
			mapper: async ({emailVerified, ...user}) => {
				const tokens = await tokenSource().tokensOf(user.id);
				return {
					...user,
					tokens,
					tokenIds: tokens.map(token => token.id),
				};
			},
			toFilter: ({fulltext, ...filter} = {}) => deepmerge(filter, {
				...toFulltext(fulltext, ["name", "email"]),
			}),
			create: async create => request.prisma.user.create({
				data: create,
			})
		}),
		async handleRootUser() {
			await transactionSource().create({
				userId: userId(),
				amount: await priceSource().amountOf("default", "welcome-gift.root", 1000000),
				note: "Welcome gift for the Root User!",
			});
			await Promise.all([
				userSource().createToken(
					"site.root"
				),
				userSource().createToken(
					"*"
				)
			]);
		},
		async handleCommonUser() {
			await transactionSource().create({
				userId: userId(),
				amount: await priceSource().amountOf("default", "welcome-gift.user", 250),
				note: "Welcome gift!",
			});
			await Promise.all([
				userSource().createToken(
					"user"
				),
				userSource().createToken(
					"site.lab"
				),
				userSource().createToken(
					"site.market"
				),
				userSource().createToken(
					"/lab*"
				),
				userSource().createToken(
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
					userId: userId(),
					tokenId: $token.id,
				});
			} catch (e) {
				/**
				 * Keep it here as it checks only for unique exceptions, others are re-thrown
				 */
				await onUnique(e, async () => null);
			}
		},
		whoami: () => userSource().toMap(userId()),
	};
};
