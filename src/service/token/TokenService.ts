import {IPrismaClientTransaction} from "@leight-core/api";
import prisma from "@/puff-smith/service/prisma";
import {ITokenService} from "@/puff-smith/service/token";
import {AbstractRepositoryService, handleUniqueException} from "@leight-core/server";

export const TokenService = (prismaClient: IPrismaClientTransaction = prisma): ITokenService => {
	const service: ITokenService = ({
		...AbstractRepositoryService<ITokenService>(prismaClient, prismaClient.token, async token => token),
		async handleCreate({request}) {
			return service.map(await service.create(request));
		},
		create: async create => {
			try {
				return await prismaClient.token.create({
					data: create,
				});
			} catch (e) {
				return handleUniqueException(e, async () => prismaClient.token.findFirst({
					where: {
						name: create.name,
					},
					rejectOnNotFound: true,
				}));
			}
		},
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
