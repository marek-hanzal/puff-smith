import {PriceService} from "@/puff-smith/service/price/PriceService";
import {TokenService} from "@/puff-smith/service/token/TokenService";
import {TransactionService} from "@/puff-smith/service/transaction/TransactionService";
import {IUserService, IUserServiceCreate} from "@/puff-smith/service/user/interface";
import {UserTokenService} from "@/puff-smith/service/user/token/UserTokenService";
import {singletonOf} from "@leight-core/client";
import {handleUniqueException, RepositoryService, toFulltext} from "@leight-core/server";
import deepmerge from "deepmerge";

export const UserService = (request: IUserServiceCreate): IUserService => {
	const userService = singletonOf(() => UserService(request));
	const tokenService = singletonOf(() => TokenService(request));
	const userTokenService = singletonOf(() => UserTokenService(request));
	const transactionService = singletonOf(() => TransactionService(request));
	const priceService = singletonOf(() => PriceService(request));
	const userId = request.userService.getUserId();

	return {
		...RepositoryService<IUserService>({
			name: "user",
			source: request.prisma.user,
			mapper: async ({emailVerified, ...user}) => {
				const tokens = await tokenService().tokensOf(user.id);
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
			await transactionService().create({
				userId,
				amount: await priceService().amountOf("default", "welcome-gift.root", 1000000),
				note: "Welcome gift for the Root User!",
			});
			await Promise.all([
				userService().createToken(
					"site.root"
				),
				userService().createToken(
					"*"
				)
			]);
		},
		async handleCommonUser() {
			await transactionService().create({
				userId,
				amount: await priceService().amountOf("default", "welcome-gift.user", 250),
				note: "Welcome gift!",
			});
			await Promise.all([
				userService().createToken(
					"user"
				),
				userService().createToken(
					"site.lab"
				),
				userService().createToken(
					"site.market"
				),
				userService().createToken(
					"/lab*"
				),
				userService().createToken(
					"/market*"
				)
			]);
		},
		createToken: async token => {
			const $token = await tokenService().create({
				name: token,
			});
			try {
				await userTokenService().create({
					userId,
					tokenId: $token.id,
				});
			} catch (e) {
				return handleUniqueException(e, async () => undefined);
			}
		},
		whoami: () => userService().toMap(userId),
	};
};
