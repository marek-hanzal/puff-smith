import {PriceRepository} from "@/puff-smith/service/price/PriceRepository";
import {TokenRepository} from "@/puff-smith/service/token/TokenRepository";
import {TransactionRepository} from "@/puff-smith/service/transaction/TransactionRepository";
import {IUserRepository, IUserRepositoryCreate} from "@/puff-smith/service/user/interface";
import {UserTokenRepository} from "@/puff-smith/service/user/token/UserTokenRepository";
import {onUnique, Repository, toFulltext} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";
import deepmerge from "deepmerge";

export const UserRepository = (request: IUserRepositoryCreate): IUserRepository => {
	const userRepository = singletonOf(() => UserRepository(request));
	const tokenRepository = singletonOf(() => TokenRepository(request));
	const userTokenRepository = singletonOf(() => UserTokenRepository(request));
	const transactionRepository = singletonOf(() => TransactionRepository(request));
	const priceRepository = singletonOf(() => PriceRepository(request));
	const userId = singletonOf(() => request.userService.getUserId());

	return {
		...Repository<IUserRepository>({
			name: "user",
			source: request.prisma.user,
			mapper: async ({emailVerified, ...user}) => {
				const tokens = await tokenRepository().tokensOf(user.id);
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
			await transactionRepository().create({
				userId: userId(),
				amount: await priceRepository().amountOf("default", "welcome-gift.root", 1000000),
				note: "Welcome gift for the Root User!",
			});
			await Promise.all([
				userRepository().createToken(
					"site.root"
				),
				userRepository().createToken(
					"*"
				)
			]);
		},
		async handleCommonUser() {
			await transactionRepository().create({
				userId: userId(),
				amount: await priceRepository().amountOf("default", "welcome-gift.user", 250),
				note: "Welcome gift!",
			});
			await Promise.all([
				userRepository().createToken(
					"user"
				),
				userRepository().createToken(
					"site.lab"
				),
				userRepository().createToken(
					"site.market"
				),
				userRepository().createToken(
					"/lab*"
				),
				userRepository().createToken(
					"/market*"
				)
			]);
		},
		createToken: async token => {
			const $token = await tokenRepository().create({
				name: token,
			});
			try {
				await userTokenRepository().create({
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
		whoami: () => userRepository().toMap(userId()),
	};
};
