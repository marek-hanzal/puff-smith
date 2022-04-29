import {ServiceCreate} from "@/puff-smith/service";
import {PriceService} from "@/puff-smith/service/price/PriceService";
import {TokenService} from "@/puff-smith/service/token/TokenService";
import {TransactionService} from "@/puff-smith/service/transaction/TransactionService";
import {IUserService, IUserServiceCreate} from "@/puff-smith/service/user/interface";
import {UserTokenService} from "@/puff-smith/service/user/token/UserTokenService";
import {handleUniqueException, RepositoryService, toFulltext} from "@leight-core/server";

export const UserService = (request: IUserServiceCreate = ServiceCreate()): IUserService => {
	const service: IUserService = {
		...RepositoryService<IUserService>({
			name: "user",
			source: request.prisma.user,
			mapper: async ({emailVerified, ...user}) => {
				const tokens = await TokenService().tokensOf(user.id);
				return {
					...user,
					tokens,
					tokenIds: tokens.map(token => token.id),
				};
			},
			toFilter: ({fulltext, ...filter} = {}) => ({
				...filter,
				...toFulltext(fulltext, ["name", "email"]),
			}),
			create: async create => request.prisma.user.create({
				data: create,
			})
		}),
		async handleRootUser(userId: string) {
			await TransactionService(request).create({
				userId,
				amount: await PriceService(request).amountOf("default", "welcome-gift.root", 1000000),
				note: "Welcome gift for the Root User!",
			});
			await Promise.all([
				service.createToken(
					userId,
					"site.root"
				),
				service.createToken(
					userId,
					"*"
				)
			]);
		},
		async handleCommonUser(userId: string) {
			await TransactionService(request).create({
				userId,
				amount: await PriceService(request).amountOf("default", "welcome-gift.user", 250),
				note: "Welcome gift!",
			});
			await Promise.all([
				service.createToken(
					userId,
					"user"
				),
				service.createToken(
					userId,
					"site.lab"
				),
				service.createToken(
					userId,
					"site.market"
				),
				service.createToken(
					userId,
					"/lab*"
				),
				service.createToken(
					userId,
					"/market*"
				)
			]);
		},
		createToken: async (userId, token) => {
			const _token = await TokenService(request).create({
				name: token,
			});
			try {
				await UserTokenService(request).create({
					userId,
					tokenId: _token.id,
				});
			} catch (e) {
				return handleUniqueException(e, async () => undefined);
			}
		}
	};

	return service;
};
