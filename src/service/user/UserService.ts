import {IUserService} from "@/puff-smith/service/user/interface";
import prisma from "@/puff-smith/service/prisma";
import {AbstractRepositoryService, toFulltext} from "@leight-core/server";

export const UserService = (prismaClient = prisma): IUserService => ({
	...AbstractRepositoryService<IUserService>(prismaClient, prismaClient.user, async user => ({
		...user,
	}), ({fulltext, ...filter}: any) => ({
		...filter,
		...toFulltext(fulltext, ['name', 'email']),
	})),
	create: async create => (await prismaClient.user.create({
		data: create,
	})),
});
