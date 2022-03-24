import prisma from "@/puff-smith/service/prisma";
import {AbstractRepositoryService} from "@leight-core/server";
import {IPrismaClientTransaction} from "@leight-core/api";
import {IUserTokenService} from "@/puff-smith/service/user/token/interface";
import {UserService} from "@/puff-smith/service/user";
import {TokenService} from "@/puff-smith/service/token";

export const UserTokenService = (prismaClient: IPrismaClientTransaction = prisma): IUserTokenService => {
	const service: IUserTokenService = {
		...AbstractRepositoryService<IUserTokenService>(prismaClient, prismaClient.userToken, async userToken => {
			return {
				...userToken,
				user: await UserService().toMap(userToken.userId),
				token: await TokenService().toMap(userToken.tokenId),
			};
		}),
		async handleCreate({request}) {
			return service.map(await service.create(request));
		},
		create: async create => prismaClient.userToken.create({
			data: create,
		}),
	};

	return service;
};
