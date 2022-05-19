import {ITokenRepository, ITokenRepositoryCreate} from "@/puff-smith/service/token/interface";
import {onUnique, Repository} from "@leight-core/server";
import {singletonOf} from "@leight-core/utils";

export const TokenRepository = (request: ITokenRepositoryCreate): ITokenRepository => {
	const tokenRepository = singletonOf(() => TokenRepository(request));

	return {
		...Repository<ITokenRepository>({
			name: "token",
			source: request.prisma.token,
			mapper: async token => token,
			create: async token => {
				try {
					return await request.prisma.token.create({
						data: token,
					});
				} catch (e) {
					return onUnique(e, async () => request.prisma.token.findFirst({
						where: {
							name: token.name,
						},
						rejectOnNotFound: true,
					}));
				}
			},
		}),
		tokensOf: userId => tokenRepository().list(request.prisma.token.findMany({
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
