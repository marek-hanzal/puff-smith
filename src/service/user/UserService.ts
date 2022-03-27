import {IUserService} from "@/puff-smith/service/user/interface";
import prisma from "@/puff-smith/service/prisma";
import {AbstractRepositoryService, handleUniqueException, toFulltext} from "@leight-core/server";
import {IPrismaClientTransaction} from "@leight-core/api";
import {TransactionService} from "@/puff-smith/service/transaction";
import {UserTokenService} from "@/puff-smith/service/user/token";
import {TokenService} from "@/puff-smith/service/token";
import {PriceService} from "@/puff-smith/service/price";

export const UserService = (prismaClient: IPrismaClientTransaction = prisma): IUserService => {
	const service: IUserService = {
		...AbstractRepositoryService<IUserService>(prismaClient, prismaClient.user, async ({emailVerified, ...user}) => {
			const tokenService = TokenService();
			const tokens = await tokenService.tokensOf(user.id);
			return {
				...user,
				tokens,
				tokenIds: tokens.map(token => token.id),
			};
		}, ({fulltext, ...filter}: any) => ({
			...filter,
			...toFulltext(fulltext, ['name', 'email']),
		})),
		handleCreate: async ({request}) => service.map(await service.create(request)),
		create: async create => prismaClient.user.create({
			data: create,
		}),
		async handleRootUser(userId: string) {
			await TransactionService(prismaClient).create({
				userId,
				amount: await PriceService(prismaClient).amountOf('default', 'welcome-gift.root', 1000000),
				note: 'Welcome gift for the Root User!',
			});
			await Promise.all([
				service.createToken(
					userId,
					'site.root'
				),
				service.createToken(
					userId,
					'*'
				)
			]);
		},
		async handleCommonUser(userId: string) {
			await TransactionService(prismaClient).create({
				userId,
				amount: await PriceService(prismaClient).amountOf('default', 'welcome-gift.user', 250),
				note: 'Welcome gift!',
			});
			await Promise.all([
				service.createToken(
					userId,
					'user'
				),
				service.createToken(
					userId,
					'site.lab'
				),
				service.createToken(
					userId,
					'site.market'
				),
				service.createToken(
					userId,
					'/lab*'
				),
				service.createToken(
					userId,
					'/market*'
				)
			]);
		},
		createToken: async (userId, token) => {
			const _token = await TokenService(prismaClient).create({
				name: token,
			});
			try {
				await UserTokenService(prismaClient).create({
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
