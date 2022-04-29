import {ServiceCreate} from "@/puff-smith/service";
import {ITokenService, ITokenServiceCreate} from "@/puff-smith/service/token/interface";
import {RepositoryService} from "@leight-core/server";

export const TokenService = (request: ITokenServiceCreate = ServiceCreate()): ITokenService => {
	const service: ITokenService = ({
		...RepositoryService<ITokenService>({
			name: "token",
			source: request.prisma.token,
			mapper: async token => token,
			create: async create => request.prisma.token.create({
				data: create,
			}),
			onUnique: create => request.prisma.token.findFirst({
				where: {
					name: create.name,
				},
				rejectOnNotFound: true,
			}),
		}),
		tokensOf: userId => service.list(request.prisma.token.findMany({
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
};
