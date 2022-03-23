import {IPrismaClientTransaction} from "@leight-core/api";
import prisma from "@/puff-smith/service/prisma";
import {ITokenService} from "@/puff-smith/service/token/interface";
import {AbstractRepositoryService} from "@leight-core/server";

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
				if ((e as Error)?.message?.includes('Unique constraint failed on the fields')) {
					return await prismaClient.token.findFirst({
						where: {
							name: create.name,
						},
						rejectOnNotFound: true,
					});
				}
				throw e;
			}
		}
	});

	return service;
}
