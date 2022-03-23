import {IUserService} from "@/puff-smith/service/user/interface";
import prisma from "@/puff-smith/service/prisma";
import {AbstractRepositoryService, toFulltext} from "@leight-core/server";
import {IPrismaClientTransaction} from "@leight-core/api";
import {TransactionService} from "@/puff-smith/service/transaction";

export const UserService = (prismaClient: IPrismaClientTransaction = prisma): IUserService => {
	const service: IUserService = {
		...AbstractRepositoryService<IUserService>(prismaClient, prismaClient.user, async user => ({
			...user,
		}), ({fulltext, ...filter}: any) => ({
			...filter,
			...toFulltext(fulltext, ['name', 'email']),
		})),
		async handleCreate({request}) {
			return service.map(await service.create(request));
		},
		create: async create => (await prismaClient.user.create({
			data: create,
		})),
		async handleRootUser(userId: string) {
			await TransactionService(prismaClient).create({
				userId,
				amount: 1000000,
				note: 'Welcome gift for the Root User!',
			});
		}
	};

	return service;
};
