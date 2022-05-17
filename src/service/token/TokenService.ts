import {defaults} from "@/puff-smith/service";
import {ITokenService, ITokenServiceCreate} from "@/puff-smith/service/token/interface";
import {singletonOf} from "@leight-core/client";
import {RepositoryService} from "@leight-core/server";

export const TokenService = (request: ITokenServiceCreate = defaults()): ITokenService => {
	const tokenService = singletonOf(() => TokenService(request));

	return {
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
		tokensOf: userId => tokenService().list(request.prisma.token.findMany({
			where: {
				UserToken: {
					every: {
						userId,
					}
				}
			}
		})),
	};
};
