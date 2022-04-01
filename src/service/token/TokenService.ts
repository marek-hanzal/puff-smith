import {IPrismaClientTransaction} from "@leight-core/api";
import prisma from "@/puff-smith/service/prisma";
import {ITokenService} from "@/puff-smith/service/token";
import {RepositoryService} from "@leight-core/server";

export const TokenService = (prismaClient: IPrismaClientTransaction = prisma): ITokenService => {
	const service: ITokenService = ({
		...RepositoryService<ITokenService>({
			name: 'token',
			source: prismaClient.token,
			mapper: async token => token,
			create: async create => prismaClient.token.create({
				data: create,
			}),
			onUnique: create => prismaClient.token.findFirst({
				where: {
					name: create.name,
				},
				rejectOnNotFound: true,
			}),
		}),
		tokensOf: userId => service.list(prismaClient.token.findMany({
			where: {
				UserToken: {
					every: {
						userId,
					}
				}
			}
		})),
	});

	return service;
}
