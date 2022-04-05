import prisma from "@/puff-smith/service/prisma";
import {TokenService} from "@/puff-smith/service/token";
import {UserService} from "@/puff-smith/service/user";
import {IUserTokenService} from "@/puff-smith/service/user/token/interface";
import {IPrismaClientTransaction} from "@leight-core/api";
import {RepositoryService} from "@leight-core/server";

export const UserTokenService = (prismaClient: IPrismaClientTransaction = prisma): IUserTokenService => RepositoryService<IUserTokenService>({
	name: "user-token",
	source: prismaClient.userToken,
	mapper: async userToken => ({
		...userToken,
		user: await UserService().toMap(userToken.userId),
		token: await TokenService().toMap(userToken.tokenId),
	}),
	create: async create => prismaClient.userToken.create({
		data: create,
	})
});
