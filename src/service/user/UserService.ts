import {IUserService} from "@/puff-smith/service/user/interface";
import prisma from "@/puff-smith/service/prisma";
import {AbstractRepositoryService, toFulltext} from "@leight-core/server";
import {IPrismaClientTransaction} from "@leight-core/api";

export const UserService = (prismaClient: IPrismaClientTransaction = prisma): IUserService => ({
	...AbstractRepositoryService<IUserService>(prismaClient, prismaClient.user, async user => ({
		...user,
	}), ({fulltext, ...filter}: any) => ({
		...filter,
		...toFulltext(fulltext, ['name', 'email']),
	})),
	async handleCreate({request}) {
		return this.map(await this.create(request));
	},
	create: async create => (await prismaClient.user.create({
		data: create,
	})),
});
