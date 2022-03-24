import {IUserService} from "@/puff-smith/service/user/interface";
import prisma from "@/puff-smith/service/prisma";
import {AbstractRepositoryService, toFulltext} from "@leight-core/server";
import {IPrismaClientTransaction} from "@leight-core/api";
import {TransactionService} from "@/puff-smith/service/transaction";
import {UserTokenService} from "@/puff-smith/service/user/token";
import {TokenService} from "@/puff-smith/service/token";

export const UserService = (prismaClient: IPrismaClientTransaction = prisma): IUserService => {
	const service: IUserService = {
		...AbstractRepositoryService<IUserService>(prismaClient, prismaClient.user, async user => {
			const tokenService = TokenService();
			return {
				...user,
				tokens: await tokenService.tokensOf(user.id),
			};
		}, ({fulltext, ...filter}: any) => ({
			...filter,
			...toFulltext(fulltext, ['name', 'email']),
		})),
		handleCreate: async ({request}) => service.map(await service.create(request)),
		create: async create => (await prismaClient.user.create({
			data: create,
		})),
		async handleRootUser(userId: string) {
			await TransactionService(prismaClient).create({
				userId,
				amount: 1000000,
				note: 'Welcome gift for the Root User!',
			});
			await service.createToken(
				userId,
				'*'
			);
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
				if ((e as Error)?.message?.includes('Unique constraint failed on the fields')) {
					return;
				}
				throw e;
			}
		}
	};

	return service;
};
